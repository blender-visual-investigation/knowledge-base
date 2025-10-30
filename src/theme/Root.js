import React from 'react';
import Root from '@theme-original/Root';
import ScrollProgressBar from '@site/src/components/ScrollProgressBar';

export default function RootWrapper(props) {
  return (
    <>
      <ScrollProgressBar />
      <Root {...props} />
    </>
  );
}
