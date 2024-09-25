import React, { useEffect } from 'react';

export function Klaviyo_form(form) {
  const {klaviyo_formular} = form;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id={PUBLIC_API_KEY}`;
    script.type = 'text/javascript';
    document.getElementById('script_klaviyo_container').appendChild(script);
    window._klForms = window._klForms || []; 
    window._klForms.push(klaviyo_formular);
    window._klOnsite = window._klOnsite || []; 
    window._klOnsite.push(['openForm', klaviyo_formular]);
    return () => {
      console.log('Component Unmounted');
      
    };
  }, []);
  return (
    <>
      <div id="script_klaviyo_container" ></div>
      <div className={klaviyo_formular} >
      </div>
    </>
  );
}