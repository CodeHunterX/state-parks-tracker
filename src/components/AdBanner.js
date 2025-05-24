import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const AdBanner = () => {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Don't show ad on these pages
  const excludedPaths = ['/login', '/register', '/terms', '/privacy'];
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        bgcolor: '#f5e7c6',
        color: '#5B4636',
        textAlign: 'center',
        py: 0.5,
        zIndex: 1300,
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)'
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 728, height: 90 }}
        data-ad-client="ca-pub-7600741050545857"
        data-ad-slot="6439837100"
        ref={adRef}
      />
    </Box>
  );
};

export default AdBanner; 