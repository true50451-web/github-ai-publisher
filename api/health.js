export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      ok: false,
      message: "Method not allowed"
    });
  }

  return res.status(200).json({
    ok: true,
    service: "GitHub AI Publisher API",
    message: "Backend is running"
  });
}
