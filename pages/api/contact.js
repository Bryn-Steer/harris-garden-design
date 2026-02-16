export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    // Required fields (minimum viable)
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "Website";
    const toEmail = process.env.BREVO_TO_EMAIL;

    if (!apiKey || !listId || !senderEmail || !toEmail) {
      console.error("Missing env vars:", {
        hasApiKey: !!apiKey,
        listId,
        hasSenderEmail: !!senderEmail,
        hasToEmail: !!toEmail,
      });
      return res.status(500).json({ message: "Server misconfigured" });
    }

    // Split name into FIRSTNAME/LASTNAME (Brevo default contact attributes)
    const firstName = String(name).trim().split(" ")[0] || "";
    const lastName = String(name).trim().split(" ").slice(1).join(" ") || "";

    /* ---------------------------------
       1) CREATE / UPDATE CONTACT
       Guaranteed compatibility: only default attributes
    ---------------------------------- */
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [listId],
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
        },
      }),
    });

    if (!contactRes.ok) {
      const errText = await contactRes.text();
      console.error("Brevo contact error:", contactRes.status, errText);
      // Continue to email notification regardless
    }

    /* ---------------------------------
       2) SEND EMAIL TO YOU (ENQUIRY)
       Guaranteed: even if contact create fails, you still get the lead
    ---------------------------------- */
    const safe = (v) => String(v || "").replace(/[<>]/g, ""); // basic injection guard
    const htmlMessage = String(message || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br/>");

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: toEmail, name: "Admin" }],
        replyTo: { email: safe(email), name: safe(name) },
        subject: `New Contact Enquiry: ${safe(subject) || "Website Form"}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safe(name)}</p>
          <p><strong>Email:</strong> ${safe(email)}</p>
          <p><strong>Phone:</strong> ${safe(phone) || "Not provided"}</p>
          <p><strong>Subject:</strong> ${safe(subject) || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${htmlMessage}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Brevo email error:", emailRes.status, errText);
      // We still return success generically to the user
    }

    // Generic success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    // Generic success response (anti-spam / anti-enumeration)
    return res.status(200).json({ success: true });
  }
}
