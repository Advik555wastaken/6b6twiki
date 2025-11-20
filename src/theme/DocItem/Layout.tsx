import React from 'react';
import OriginalDocItemLayout from '@theme-original/DocItem/Layout';
import EditPageTop from '@site/src/components/EditPageTop';

export default function Layout(props) {
  const editUrl = props.content?.metadata?.editUrl;

  return (
    <>
      <EditPageTop editUrl={editUrl} />
      <OriginalDocItemLayout {...props} />
    </>
  );
}
