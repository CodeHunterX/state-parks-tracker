import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Privacy = () => (
  <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>1. What Data We Collect</Typography>
        <Typography variant="body1" paragraph>
          We collect only the information necessary to provide our services, such as your email address and your park visit progress. We do not collect unnecessary personal data.
        </Typography>
        <Typography variant="h6" gutterBottom>2. How We Use Data</Typography>
        <Typography variant="body1" paragraph>
          Your data is used solely to provide and improve the States of Adventure experience. We do not sell your personal information to third parties.
        </Typography>
        <Typography variant="h6" gutterBottom>3. Data Security</Typography>
        <Typography variant="body1" paragraph>
          We take reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no system is completely secure.
        </Typography>
        <Typography variant="h6" gutterBottom>4. User Control</Typography>
        <Typography variant="body1" paragraph>
          You can view and manage your data at any time. If you wish to delete your account or have questions about your data, please contact us.
        </Typography>
        <Typography variant="h6" gutterBottom>5. Contact</Typography>
        <Typography variant="body1" paragraph>
          If you have questions or concerns about this Privacy Policy, please contact us.
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default Privacy; 