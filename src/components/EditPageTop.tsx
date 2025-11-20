import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import styles from './EditPageTop.module.css'; // optional for styling

export default function EditPageTop() {
  const doc = useDoc();
  if (!doc) return null;

  const editUrl = doc.editUrl; // this is automatically provided by Docusaurus

  return (
    <div className={styles.editTop}>
      <a href={editUrl} target="_blank" rel="noopener noreferrer">
        ✏️ Edit this page
      </a>
    </div>
  );
}
