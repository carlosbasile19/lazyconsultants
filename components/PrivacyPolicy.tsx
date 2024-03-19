import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    const loader = () => {
        const script = document.createElement("script");
        const tag = document.getElementsByTagName("script")[0];
        if (tag.parentNode) {
            tag.parentNode.insertBefore(script, tag);
        }
    };

    if (window.addEventListener) {
        window.addEventListener("load", loader, false);
    } else if ((window as any).attachEvent) {
        (window as any).attachEvent("onload", loader);
    } else {
        window.onload = loader;
    }
  }, []);

  return (
    <a
      href="https://www.iubenda.com/privacy-policy/18075581"
      className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
      title="Privacy Policy"
    >
      Privacy Policy
    </a>
  );
};

export default PrivacyPolicy;
