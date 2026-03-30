const locations = {
  bolton: {
    name: "Bolton",
    slug: "bolton",
    title: "Transforming Gardens Into Timeless Spaces in Bolton",
    metaTitle: "Garden Design & Landscaping in Bolton | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Bolton, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design delivers premium garden design and landscaping services across Bolton, creating bespoke outdoor spaces that balance beauty, function and long-term value.",
    nearby: ["Bury", "Ramsbottom", "Wigan", "Lancashire"],
    coords: { lat: 53.5769, lng: -2.4282 },
  },

  lancashire: {
    name: "Lancashire",
    slug: "lancashire",
    title: "Transforming Gardens Into Timeless Spaces in Lancashire",
    metaTitle:
      "Garden Design & Landscaping in Lancashire | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Lancashire, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design creates high-quality outdoor spaces across Lancashire, delivering bespoke garden design and landscaping solutions for homeowners seeking elegant, lasting results.",
    nearby: ["Bolton", "Wigan", "Ramsbottom", "Cheshire"],
    coords: { lat: 53.7632, lng: -2.7044 },
  },

  bury: {
    name: "Bury",
    slug: "bury",
    title: "Transforming Gardens Into Timeless Spaces in Bury",
    metaTitle: "Garden Design & Landscaping in Bury | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Bury, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design provides bespoke landscaping and garden design services across Bury, helping clients create refined, practical and beautifully finished outdoor spaces.",
    nearby: ["Bolton", "Prestwich", "Ramsbottom", "Salford"],
    coords: { lat: 53.5933, lng: -2.2966 },
  },

  ramsbottom: {
    name: "Ramsbottom",
    slug: "ramsbottom",
    title: "Transforming Gardens Into Timeless Spaces in Ramsbottom",
    metaTitle:
      "Garden Design & Landscaping in Ramsbottom | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Ramsbottom, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design works across Ramsbottom to design and build bespoke gardens, combining premium materials, careful planning and elegant landscaping for lasting impact.",
    nearby: ["Bury", "Bolton", "Prestwich", "Lancashire"],
    coords: { lat: 53.6487, lng: -2.3199 },
  },

  salford: {
    name: "Salford",
    slug: "salford",
    title: "Transforming Gardens Into Timeless Spaces in Salford",
    metaTitle: "Garden Design & Landscaping in Salford | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Salford, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design delivers premium landscaping and garden design services across Salford, creating outdoor spaces that feel considered, luxurious and built to endure.",
    nearby: ["Worsley", "Urmston", "Chorlton", "Prestwich"],
    coords: { lat: 53.4875, lng: -2.2901 },
  },

  worsley: {
    name: "Worsley",
    slug: "worsley",
    title: "Transforming Gardens Into Timeless Spaces in Worsley",
    metaTitle: "Garden Design & Landscaping in Worsley | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Worsley, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design creates bespoke outdoor spaces across Worsley, delivering premium landscaping, planting and garden design solutions tailored to each home.",
    nearby: ["Salford", "Urmston", "Bolton", "Warrington"],
    coords: { lat: 53.5005, lng: -2.3852 },
  },

  urmston: {
    name: "Urmston",
    slug: "urmston",
    title: "Transforming Gardens Into Timeless Spaces in Urmston",
    metaTitle: "Garden Design & Landscaping in Urmston | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Urmston, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design works with homeowners across Urmston to create elegant, practical and high-quality gardens that enhance both lifestyle and property appeal.",
    nearby: ["Salford", "Worsley", "Chorlton", "Didsbury"],
    coords: { lat: 53.4487, lng: -2.3543 },
  },

  didsbury: {
    name: "Didsbury",
    slug: "didsbury",
    title: "Transforming Gardens Into Timeless Spaces in Didsbury",
    metaTitle:
      "Garden Design & Landscaping in Didsbury | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Didsbury, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design delivers bespoke garden design and landscaping services across Didsbury, creating outdoor spaces that feel elegant, functional and distinctly tailored.",
    nearby: ["Chorlton", "Urmston", "Cheadle", "Salford"],
    coords: { lat: 53.4166, lng: -2.2315 },
  },

  chorlton: {
    name: "Chorlton",
    slug: "chorlton",
    title: "Transforming Gardens Into Timeless Spaces in Chorlton",
    metaTitle: "Garden Design & Landscaping in Chorlton | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Chorlton, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design creates bespoke outdoor spaces across Chorlton, combining thoughtful design, premium landscaping and a focus on long-term quality.",
    nearby: ["Didsbury", "Urmston", "Salford", "Cheadle"],
    coords: { lat: 53.4420, lng: -2.2775 },
  },

  cheadle: {
    name: "Cheadle",
    slug: "cheadle",
    title: "Transforming Gardens Into Timeless Spaces in Cheadle",
    metaTitle: "Garden Design & Landscaping in Cheadle | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Cheadle, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design works across Cheadle to deliver premium landscaping and garden design services, creating refined outdoor spaces built around each client’s vision.",
    nearby: ["Didsbury", "Chorlton", "Warrington", "Cheshire"],
    coords: { lat: 53.3949, lng: -2.2137 },
  },

  prestwich: {
    name: "Prestwich",
    slug: "prestwich",
    title: "Transforming Gardens Into Timeless Spaces in Prestwich",
    metaTitle:
      "Garden Design & Landscaping in Prestwich | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Prestwich, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design delivers bespoke landscaping and garden design services across Prestwich, creating outdoor spaces that are both polished and practical.",
    nearby: ["Bury", "Ramsbottom", "Salford", "Bolton"],
    coords: { lat: 53.5333, lng: -2.2833 },
  },

  wigan: {
    name: "Wigan",
    slug: "wigan",
    title: "Transforming Gardens Into Timeless Spaces in Wigan",
    metaTitle: "Garden Design & Landscaping in Wigan | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Wigan, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design works throughout Wigan to create bespoke gardens and premium outdoor spaces, combining strong design principles with high-quality workmanship.",
    nearby: ["Bolton", "Lancashire", "Warrington", "Cheshire"],
    coords: { lat: 53.5451, lng: -2.6325 },
  },

  warrington: {
    name: "Warrington",
    slug: "warrington",
    title: "Transforming Gardens Into Timeless Spaces in Warrington",
    metaTitle:
      "Garden Design & Landscaping in Warrington | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Warrington, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design provides bespoke landscaping and garden design services across Warrington, helping clients create outdoor spaces with elegance, structure and longevity.",
    nearby: ["Wigan", "Worsley", "Cheadle", "Cheshire"],
    coords: { lat: 53.3900, lng: -2.5969 },
  },

  cheshire: {
    name: "Cheshire",
    slug: "cheshire",
    title: "Transforming Gardens Into Timeless Spaces in Cheshire",
    metaTitle:
      "Garden Design & Landscaping in Cheshire | Harris Garden Design",
    description:
      "Harris Garden Design provides premium garden design and landscaping services in Cheshire, creating timeless outdoor spaces tailored to each property.",
    intro:
      "Harris Garden Design creates premium outdoor spaces across Cheshire, delivering bespoke garden design and landscaping solutions with a focus on timeless quality and detail.",
    nearby: ["Warrington", "Cheadle", "Lancashire", "Wigan"],
    coords: { lat: 53.1934, lng: -2.8931 },
  },
};

export default locations;