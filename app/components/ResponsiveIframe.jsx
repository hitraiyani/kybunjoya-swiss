import React, {useEffect, useRef, useState} from 'react';

export function ResponsiveIframe({url}) {
  // const iFrameRef = useRef(null);
  // const [iframeHeight, setIframeHeight] = useState(0);

  // useEffect(() => {
  //   function handleMessage(event) {
  //     if (event.data && event.data.type === 'resizeIframe') {
  //       const {height} = event.data;
  //       setIframeHeight(height);
  //     }
  //   }

  //   window.addEventListener('message', handleMessage);

  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // }, []);

  // useEffect(() => {
  //   function handleMutation(mutationsList, observer) {
  //     const height = document.documentElement.scrollHeight;
  //     if (height !== iframeHeight) {
  //       setIframeHeight(height);
  //       window.parent.postMessage({type: 'resizeIframe', height}, '*');
  //     }
  //   }

  //   const observer = new MutationObserver(handleMutation);
  //   const observerConfig = {
  //     attributes: true,
  //     childList: true,
  //     subtree: true,
  //     characterData: true,
  //   };

  //   observer.observe(document.body, observerConfig);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [iframeHeight]);
  return (
    <div className="mt-[-50px] min-[992px]:mt-[0]">
      <iframe
        src={url}
        title="Embedded Content"
        frameBorder="0"
        allowFullScreen
        // ref={iFrameRef}
        id="iFrame1"
        width={'100%'}
        // style={{height: iframeHeight}}
        className='h-[calc(100vh_-_72px)]'
      />
    </div>
  );
}
