import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function EditPageTop() {
  const location = useLocation();
  const path = location.pathname; // e.g., /Templates/player
  const docPath = path.endsWith('/') ? `${path.slice(1)}index.md` : `${path.slice(1)}.md`;

  const githubUrl = `https://github.com/Advik555wastaken/6b6twiki/edit/main/docs/${docPath}`;

  return (
    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        ✏️ Edit this page
      </a>
    </div>
  );
}
