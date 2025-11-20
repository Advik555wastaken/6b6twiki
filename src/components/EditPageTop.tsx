import React from 'react';

export default function EditPageTop({ editUrl }: { editUrl?: string }) {
  if (!editUrl) return null;

  return (
    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
      <a href={editUrl} target="_blank" rel="noopener noreferrer">
        ✏️ Edit this page
      </a>
    </div>
  );
}
