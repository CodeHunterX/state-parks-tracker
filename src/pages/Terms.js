import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Terms = () => (
  <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>1. Acceptance of Terms</Typography>
        <Typography variant="body1" paragraph>
          By using States of Adventure, you agree to these Terms of Service. If you do not agree, please do not use the site.
        </Typography>
        <Typography variant="h6" gutterBottom>2. User Responsibilities</Typography>
        <Typography variant="body1" paragraph>
          You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. Please use the site respectfully and do not misuse the service.
        </Typography>
        <Typography variant="h6" gutterBottom>3. Data and Privacy</Typography>
        <Typography variant="body1" paragraph>
          We collect only the data necessary to provide our services. We do not sell your personal information. For more details, see our Privacy Policy.
        </Typography>
        <Typography variant="h6" gutterBottom>4. Limitation of Liability</Typography>
        <Typography variant="body1" paragraph>
          States of Adventure is provided as-is. We are not liable for any damages or losses resulting from your use of the site.
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
          If you have questions about these terms, please contact us.
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default Terms; 