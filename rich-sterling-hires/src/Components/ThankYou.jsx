import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  useEffect(() => {
    (function(f,b,e,v,n,t,s) {
      if(f.fbq) return;
      n = f.fbq = function(){
        n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
      };
      if(!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '4045048509067875');
    window.fbq('track', 'PageView');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-[150px] text-center'>
      <h1 className='text-[40px]'>Thank You!</h1>
      <p className='text-[37px]'>Your application has been received.</p>
      <Link to='/' className='mt-[50px] underline'>Back to home</Link>
    </div>
  );
};

export default ThankYou;
