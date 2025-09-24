export default async function handler(req, res) {
  try {
    const body = await req.json(); // parse JSON body

    const response = await fetch('https://vercel-analytics.com/v1/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).send('Error forwarding analytics');
  }
}
