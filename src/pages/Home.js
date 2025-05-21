import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Button,
  LinearProgress,
  Paper
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const regions = [
  {
    name: 'Northeast',
    states: [
      { name: 'Connecticut', stateKey: 'connecticut', image: '/images/connecticut-poster.png', description: 'Explore Connecticut\'s coastal parks and historic sites', path: '/connecticut' },
      { name: 'Delaware', stateKey: 'delaware', image: '/images/delaware-poster.png', description: 'Explore Delaware\'s coastal parks and historic sites', path: '/delaware' },
      { name: 'Maine', stateKey: 'maine', image: '/images/maine-poster.png', description: 'Explore Maine\'s coastal parks and historic sites', path: '/maine' },
      { name: 'Maryland', stateKey: 'maryland', image: '/images/maryland-poster.png', description: 'Discover Maryland\'s Chesapeake parks and forests', path: '/maryland' },
      { name: 'Massachusetts', stateKey: 'massachusetts', image: '/images/massachusetts-poster.png', description: 'Explore Massachusetts\'s coastal parks and historic sites', path: '/massachusetts' },
      { name: 'New Hampshire', stateKey: 'new_hampshire', image: '/images/new-hampshire-poster.png', description: 'Explore New Hampshire\'s coastal parks and historic sites', path: '/new-hampshire' },
      { name: 'New Jersey', stateKey: 'new jersey', image: '/images/new-jersey-poster.png', description: 'Explore New Jersey\'s coastal parks and historic sites', path: '/new-jersey' },
      { name: 'New York', stateKey: 'new_york', image: '/images/new-york-poster.png', description: 'Explore New York\'s coastal parks and historic sites', path: '/new-york' },
      { name: 'Pennsylvania', stateKey: 'pennsylvania', image: '/images/pennsylvania-poster.png', description: 'Explore Pennsylvania\'s coastal parks and historic sites', path: '/pennsylvania' },
      { name: 'Rhode Island', stateKey: 'rhode_island', image: '/images/rhode-island-poster.png', description: 'Explore Rhode Island\'s coastal parks and historic sites', path: '/rhode-island' },
      { name: 'Vermont', stateKey: 'vermont', image: '/images/vermont-poster.png', description: 'Explore Vermont\'s coastal parks and historic sites', path: '/vermont' },
      ]
  },
  {
    name: 'Midwest',
    states: [
      { name: 'Illinois', stateKey: 'illinois', image: '/images/illinois-poster.png', description: 'Explore Illinois\'s coastal parks and historic sites', path: '/illinois' },
      { name: 'Indiana', stateKey: 'indiana', image: '/images/indiana-poster.png', description: 'Explore Indiana\'s coastal parks and historic sites', path: '/indiana' },
      { name: 'Iowa', stateKey: 'iowa', image: '/images/iowa-poster.png', description: 'Explore Iowa\'s coastal parks and historic sites', path: '/iowa' },
      { name: 'Kansas', stateKey: 'kansas', image: '/images/kansas-poster.png', description: 'Explore Kansas\'s coastal parks and historic sites', path: '/kansas' },
      { name: 'Michigan', stateKey: 'michigan', image: '/images/michigan-poster.png', description: 'Explore Michigan\'s coastal parks and historic sites', path: '/michigan' },
      { name: 'Minnesota', stateKey: 'minnesota', image: '/images/minnesota-poster.png', description: 'Explore Minnesota\'s coastal parks and historic sites', path: '/minnesota' },
      { name: 'Missouri', stateKey: 'missouri', image: '/images/missouri-poster.png', description: 'Explore Missouri\'s coastal parks and historic sites', path: '/missouri' },
      { name: 'Nebraska', stateKey: 'nebraska', image: '/images/nebraska-poster.png', description: 'Explore Nebraska\'s coastal parks and historic sites', path: '/nebraska' },
      { name: 'North Dakota', stateKey: 'northdakota', image: '/images/north-dakota-poster.png', description: 'Explore North Dakota\'s coastal parks and historic sites', path: '/north-dakota' },
      { name: 'Ohio', stateKey: 'ohio', image: '/images/ohio-poster.png', description: 'Explore Ohio\'s coastal parks and historic sites', path: '/ohio' },
      { name: 'South Dakota', stateKey: 'southdakota', image: '/images/south-dakota-poster.png', description: 'Explore South Dakota\'s coastal parks and historic sites', path: '/south-dakota' },
      { name: 'Wisconsin', stateKey: 'wisconsin', image: '/images/wisconsin-poster.png', description: 'Explore Wisconsin\'s coastal parks and historic sites', path: '/wisconsin' }
    ]
  },
  {
    name: 'South',
    states: [
      { name: 'Alabama', stateKey: 'alabama', image: '/images/alabama-poster.png', description: 'Experience Alabama\'s rich natural heritage and state parks', path: '/alabama' },
      { name: 'Arkansas', stateKey: 'arkansas', image: '/images/arkansas-poster.png', description: 'Discover Arkansas\'s scenic state parks and natural beauty', path: '/arkansas' },
      { name: 'Florida', stateKey: 'florida', image: '/images/florida-poster.png', description: 'Explore Florida\'s unique state parks and natural beauty', path: '/florida' },
      { name: 'Georgia', stateKey: 'georgia', image: '/images/georgia-poster.png', description: 'Discover Georgia\'s diverse state parks and natural wonders', path: '/georgia' },
      { name: 'Kentucky', stateKey: 'kentucky', image: '/images/kentucky-poster.png', description: 'Visit Kentucky\'s rolling hills and historic parks', path: '/kentucky' },
      { name: 'Louisiana', stateKey: 'louisiana', image: '/images/louisiana-poster.png', description: 'Experience Louisiana\'s bayous and unique state parks', path: '/louisiana' },
      { name: 'Mississippi', stateKey: 'mississippi', image: '/images/mississippi-poster.png', description: 'Visit Mississippi\'s scenic state parks and outdoor attractions', path: '/mississippi' },
      { name: 'North Carolina', stateKey: 'north_carolina', image: '/images/north-carolina-poster.png', description: 'Explore the scenic wonders of North Carolina\'s state parks', path: '/north-carolina' },
      { name: 'Oklahoma', stateKey: 'oklahoma', image: '/images/oklahoma-poster.png', description: 'Explore Oklahoma\'s prairies and lakes in its state parks', path: '/oklahoma' },
      { name: 'South Carolina', stateKey: 'south_carolina', image: '/images/south-carolina-poster.png', description: 'Discover the beauty of South Carolina\'s state parks', path: '/south-carolina' },
      { name: 'Tennessee', stateKey: 'tennessee', image: '/images/tennessee-poster.png', description: 'Explore the beautiful state parks of Tennessee', path: '/tennessee' },
      { name: 'Texas', stateKey: 'texas', image: '/images/texas-poster.png', description: 'Experience the vast landscapes of Texas state parks', path: '/texas' },
      { name: 'Virginia', stateKey: 'virginia', image: '/images/virginia-poster.png', description: 'Discover Virginia\'s historic and scenic state parks', path: '/virginia' },
      { name: 'West Virginia', stateKey: 'west_virginia', image: '/images/west-virginia-poster.png', description: 'Explore the mountain beauty of West Virginia\'s state parks', path: '/west-virginia' }
    ]
  },
  {
    name: 'West',
    states: [
      { name: 'Alaska', stateKey: 'alaska', image: '/images/alaska-poster.png', description: 'Explore Alaska\'s coastal parks and historic sites', path: '/alaska' },
      { name: 'Arizona', stateKey: 'arizona', image: '/images/arizona-poster.png', description: 'Explore Arizona\'s coastal parks and historic sites', path: '/arizona' },
      { name: 'California', stateKey: 'california', image: '/images/california-poster.png', description: 'Explore California\'s coastal parks and historic sites', path: '/california' },
      { name: 'Colorado', stateKey: 'colorado', image: '/images/colorado-poster.png', description: 'Explore Colorado\'s coastal parks and historic sites', path: '/colorado' },
      { name: 'Hawaii', stateKey: 'hawaii', image: '/images/hawaii-poster.png', description: 'Explore Hawaii\'s coastal parks and historic sites', path: '/hawaii' },
      { name: 'Idaho', stateKey: 'idaho', image: '/images/idaho-poster.png', description: 'Explore Idaho\'s coastal parks and historic sites', path: '/idaho' },
      { name: 'Montana', stateKey: 'montana', image: '/images/montana-poster.png', description: 'Explore Montana\'s coastal parks and historic sites', path: '/montana' },
      { name: 'Nevada', stateKey: 'nevada', image: '/images/nevada-poster.png', description: 'Explore Nevada\'s coastal parks and historic sites', path: '/nevada' },
      { name: 'New Mexico', stateKey: 'new mexico', image: '/images/new-mexico-poster.png', description: 'Explore New Mexico\'s coastal parks and historic sites', path: '/new-mexico' },
      { name: 'Oregon', stateKey: 'oregon', image: '/images/oregon-poster.png', description: 'Explore Oregon\'s coastal parks and historic sites', path: '/oregon' },
      { name: 'Utah', stateKey: 'utah', image: '/images/utah-poster.png', description: 'Explore Utah\'s coastal parks and historic sites', path: '/utah' },
      { name: 'Washington', stateKey: 'washington', image: '/images/washington-poster.png', description: 'Explore Washington\'s coastal parks and historic sites', path: '/washington' },
      { name: 'Wyoming', stateKey: 'wyoming', image: '/images/wyoming-poster.png', description: 'Explore Wyoming\'s coastal parks and historic sites', path: '/wyoming' }
    ]
  }
];

const placeholderImage = '/images/placeholder-state.png';
const placeholderDescription = 'State parks coming soon!';

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, visitedParks } = useAuth();
  const [parksByState, setParksByState] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalParks, setTotalParks] = useState(0);

  useEffect(() => {
    async function fetchParks() {
      const result = {};
      let total = 0;
      for (const region of regions) {
        for (const state of region.states) {
          const q = query(collection(db, 'parks'), where('state', '==', state.stateKey));
          const snapshot = await getDocs(q);
          result[state.stateKey] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          total += snapshot.docs.length;
        }
      }
      setParksByState(result);
      setTotalParks(total);
      setLoading(false);
    }
    fetchParks();
  }, []);

  const visitedCount = visitedParks.length;
  const progressPercentage = totalParks > 0 ? (visitedCount / totalParks) * 100 : 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          State Parks Tracker
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Track your visits to state parks across the United States
        </Typography>
        {currentUser && (
          <Paper elevation={3} sx={{ p: 3, mb: 4, maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" gutterBottom>
              Overall Progress
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={progressPercentage} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {Math.round(progressPercentage)}%
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {visitedCount} of {totalParks} parks visited
            </Typography>
          </Paper>
        )}
        {!currentUser && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/login')}
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        )}
      </Box>

      {regions.map(region => (
        <Box key={region.name} sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {region.name}
          </Typography>
          <Grid container spacing={4}>
            {region.states.map((state) => {
              const parks = parksByState[state.stateKey] || [];
              const visited = currentUser
                ? parks.filter(park => visitedParks.includes(park.id)).length
                : 0;
              const progress = parks.length > 0 ? (visited / parks.length) * 100 : 0;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={state.name}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      width: 340,
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box',
                      mx: 'auto'
                    }}
                  >
                    <CardActionArea
                      onClick={() => state.path && !state.disabled && navigate(state.path)}
                      disabled={state.disabled || !state.path}
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                    >
                      <Box
                        sx={{
                          height: 200,
                          backgroundImage: `url(${state.image || placeholderImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <CardContent sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 2
                      }}>
                        <Box>
                          <Typography gutterBottom variant="h5" component="h2">
                            {state.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {state.description || placeholderDescription}
                          </Typography>
                        </Box>
                        {currentUser && !loading && state.path && (
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Visited {visited} of {parks.length} parks
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={progress}
                              sx={{ height: 8, borderRadius: 4, mt: 0.5 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                              {Math.round(progress)}% Complete
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Home; 