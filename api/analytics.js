import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    let body = req.body;

    // Parse JSON if it's a string
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }

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
