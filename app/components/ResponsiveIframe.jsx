import React, {useEffect, useRef, useState} from 'react';
import IframeResizer from 'iframe-resizer-react';
import {useEffectOnce} from 'react-use';

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
  useEffectOnce(() => {
    // window.addEventListener(
    //   'message',
    //   function (event) {
    //     if (
    //       event.origin === 'https://kybunjoya.aico.swiss' &&
    //       event.data.contactModalOpened
    //     ) {
    //       document
    //         .getElementById('iFrame1')
    //         .parentElement.classList.add('relative');
    //       document.getElementById('iFrame1').parentElement.style.zIndex = 51;
    //     } else if (
    //       event.origin === 'https://kybunjoya.aico.swiss' &&
    //       event.data.contactModalClosed
    //     ) {
    //       document
    //         .getElementById('iFrame1')
    //         .parentElement.classList.remove('relative');
    //       document.getElementById('iFrame1').parentElement.style.zIndex =
    //         'auto';
    //     } else {
    //       console.log('Origin not allowed!');
    //     }
    //   },
    //   false,
    // );
    // window.onload = () => {
    if (screen.width > 1240) {
      window.addEventListener(
        'message',
        function (event) {
          console.log('event!');
          if (
            event.origin === 'https://kybunjoya.aico.swiss' &&
            event.data.iframeHeightUpdated
          ) {
            document.getElementById('iFrame1').style.height =
              event.data.height + 'px';
            console.log('Origin allowed!');
          } else {
            console.log('Origin not allowed!');
          }
        },
        false,
      );
      console.log('page is fully loaded', screen.width);
    }
    // };
  });
  return (
    <div className="mt-[-50px] min-[992px]:mt-[0]">
      <iframe
        src={url}
        allow="geolocation"
        title="Embedded Content"
        frameBorder="0"
        allowFullScreen
        // ref={iFrameRef}
        id="iFrame1"
        width={'100%'}
        // style={{height: iframeHeight}}
        className=" max-[991px]:h-[calc(100vh_-_72px)] min-[992px]:h-[1390px] min-[1200px]:h-[1430px] min-[1400px]:h-[1230px]"
      />
      {/* <IframeResizer
        src={url}
        allow="geolocation"
        title="Embedded Content"
        id="iFrame1"
        allowFullScreen
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        style={{width: '1px', minWidth: '100%'}}
      /> */}
    </div>
  );
}
