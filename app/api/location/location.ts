// pages/api/location.ts
export default async function handler(req, res) {
    try {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket?.remoteAddress ||
        "";
  
      const response = await fetch(`https://ipinfo.io/${ip}/json?token=ec04fa381be6f0`);
      if (!response.ok) throw new Error("Failed to fetch location");
  
      const data = await response.json();
  
      res.status(200).json({
        city: data.city,
        region: data.region,
        country_name: data.country,
        ip: data.ip,
      });
    } catch (err) {
      res.status(200).json({
        city: "Lahore",
        region: "Punjab",
        country_name: "Pakistan",
        ip: "N/A",
      });
    }
  }
  