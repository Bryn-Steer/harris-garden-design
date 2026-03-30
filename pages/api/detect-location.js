export default async function handler(req, res) {
  try {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded?.split(",")[0]?.trim();

    const fallbackIp = req.socket?.remoteAddress;
    const userIp = ip || fallbackIp;

    if (!userIp) {
      return res.status(200).json({ lat: null, lng: null });
    }

    const response = await fetch(`http://ip-api.com/json/${userIp}?fields=status,lat,lon`);
    const data = await response.json();

    if (data?.status !== "success") {
      return res.status(200).json({ lat: null, lng: null });
    }

    return res.status(200).json({
      lat: data.lat,
      lng: data.lon,
    });
  } catch (error) {
    console.error("detect-location error:", error);
    return res.status(200).json({ lat: null, lng: null });
  }
}