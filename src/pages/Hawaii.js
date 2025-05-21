import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Hawaii = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Hawaii State Parks
        </Typography>
        <Typography variant="body1">
          State parks coming soon!
        </Typography>
      </CardContent>
    </Card>
  </Container>
);

export default Hawaii; 