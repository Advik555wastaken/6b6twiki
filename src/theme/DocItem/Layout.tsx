import React from 'react';
import OriginalDocItemLayout from '@theme-original/DocItem/Layout';
import EditPageTop from '@site/src/components/EditPageTop';

export default function Layout(props) {
  // Docusaurus already provides the fully correct editUrl per doc
  const editUrl = props.content?.metadata?.editUrl;

  return (
    <>
      <EditPageTop editUrl={editUrl} />  {/* Top button */}
      <OriginalDocItemLayout {...props} /> {/* Original layout, including bottom edit link */}
    </>
  );
}
