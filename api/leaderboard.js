// api/leaderboard.js
export default async function handler(req, res) {
  const { page = 1 } = req.query;

  try {
    const fetchRes = await fetch(`https://scsa-backend-production.up.railway.app/api/leaderboard?page=${page}`);
    const data = await fetchRes.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "代理请求失败", detail: e.message });
  }
}
