import React, {useRef} from 'react';

export function ResponsiveIframe({url}) {
  const iframeRef = useRef();
  return (
    <iframe
      src={url}
      title="Embedded Content"
      frameBorder="0"
      allowFullScreen
      ref={iframeRef}
      width={'100%'}
      onLoad={() => {
        iframeRef.current.style.height =
          iframeRef.current.contentWindow.document.body.scrollHeight + 'px';
      }}
    />
  );
}
