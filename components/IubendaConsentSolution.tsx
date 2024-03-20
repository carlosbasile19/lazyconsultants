import React, { useEffect } from 'react';


const IubendaConsentSolution = () => {
  useEffect(() => {
    // Configuration for Iubenda Consent Solution
    
    // @ts-ignore
    window._iub = window._iub || [];
    // @ts-ignore
    window._iub.csConfiguration = {
      "askConsentAtCookiePolicyUpdate": true,
      "enableFadp": true,
      "enableLgpd": true,
      "enableUspr": true,
      "fadpApplies": true,
      "floatingPreferencesButtonDisplay": "bottom-left",
      "lang": "en",
      "perPurposeConsent": true,
      "siteId": 3561060,
      "usprApplies": true,
      "whitelabel": false,
      "cookiePolicyId": 18075581,
      "banner": {
        "acceptButtonDisplay": true,
        "closeButtonDisplay": false,
        "customizeButtonDisplay": true,
        "explicitWithdrawal": true,
        "listPurposes": true,
        "position": "float-bottom-center",
        "rejectButtonDisplay": true,
        "showTitle": false
      }
    };

    // Dynamically load scripts
    const script1 = document.createElement("script");
    script1.src = "https://cs.iubenda.com/autoblocking/3561060.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "//cdn.iubenda.com/cs/gpp/stub.js";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
    script3.async = true;
    document.body.appendChild(script3);

    return () => {
      // Cleanup function to remove dynamically added scripts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return null; // or any component you may want to render
};

export default IubendaConsentSolution;
