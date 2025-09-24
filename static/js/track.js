(function() {
  // Function to send an event to the serverless proxy
  function sendEvent(eventName = 'pageview') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: eventName,
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      })
    }).catch(err => console.error('Analytics proxy error:', err));
  }

  // Send a pageview immediately
  sendEvent();

  // Optional: track clicks on the page
  document.addEventListener('click', () => sendEvent('click'));
})();
