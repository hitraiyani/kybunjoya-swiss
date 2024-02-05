  export const klaviyo_dr_kybun = () => {
    document.addEventListener("klaviyoForms", function(e) {
      if (e.detail.type == 'submit') {
        var _learnq = window._learnq || [];
        var url_visit = window.location.pathname;
          _learnq.push(['identify', {
            'URL Visited':url_visit
          }]);
      }
    });
  };