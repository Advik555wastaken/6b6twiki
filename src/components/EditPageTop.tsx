import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import styles from './EditPageTop.module.css'; // optional styling

export default function EditPageTop() {
  const doc = useDoc();
  if (!doc) return null;

  if (!doc.editUrl) return null;

  return (
    <div className={styles.editTop}>
      <a href={doc.editUrl} target="_blank" rel="noopener noreferrer">
        ✏️ Edit this page
      </a>
    </div>
  );
}
