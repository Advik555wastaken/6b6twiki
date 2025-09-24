export default async function handler(req, res) {
  const url = 'https://vercel-analytics.com/v1/event'; // original Vercel endpoint

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error forwarding analytics');
  }
}
