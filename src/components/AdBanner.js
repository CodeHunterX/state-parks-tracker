import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        // ignore
      }
    }
  }, []);

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
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
        maxHeight: 90,
        minHeight: 60,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', margin: '0 auto', height: 60, maxHeight: 90 }}
        data-ad-client="ca-pub-7600741050545857"
        data-ad-slot="6439837100"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </Box>
  );
};

export default AdBanner; 