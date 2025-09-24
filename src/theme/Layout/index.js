import React from 'react';
import Layout from '@theme-original/Layout';

export default function CustomLayout(props) {
  return (
    <>
      <Layout {...props} />

      {/* Load custom analytics wrapper */}
      <script async defer src="/js/track.js"></script>
    </>
  );
}
