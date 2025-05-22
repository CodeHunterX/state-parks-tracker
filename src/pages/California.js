import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
  Alert,
  Paper,
  Divider
} from '@mui/material';
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

// Custom marker icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style="
      background-color: ${color};
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 4px rgba(0,0,0,0.5);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
};

const California = () => {
  const [parks, setParks] = useState([]);
  const [error, setError] = useState('');
  const { currentUser, visitedParks, refreshVisitedParks } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchParks();
  }, []);

  const fetchParks = async () => {
    try {
      const parksCollection = collection(db, 'parks');
      const q = query(parksCollection, where('state', '==', 'california'));
      const parksSnapshot = await getDocs(q);
      const parksList = parksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      const sortedParks = parksList.sort((a, b) => a.name.localeCompare(b.name));
      setParks(sortedParks);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch parks');
      setLoading(false);
    }
  };

  const handleMarkVisited = async (parkId) => {
    try {
      const userDoc = doc(db, 'users', currentUser.uid);
      const currentVisitedParks = visitedParks || [];
      const newVisitedParks = [...currentVisitedParks, parkId];
      await setDoc(userDoc, { visitedParks: newVisitedParks }, { merge: true });
      refreshVisitedParks();
    } catch (error) {
      setError('Failed to mark park as visited');
    }
  };

  const progress = parks.length > 0 ? (parks.filter(park => visitedParks.includes(park.id)).length / parks.length) * 100 : 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      {/* Progress Bar */}
      {currentUser && !loading && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Your Progress
            </Typography>
            <Typography variant="body2" gutterBottom>
              Visited {parks.filter(park => visitedParks.includes(park.id)).length} out of {parks.length} parks
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {Math.round(progress)}% Complete
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Map */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Park Locations
          </Typography>
          <Box sx={{ height: 400 }}>
            <MapContainer
              center={[36.7783, -119.4179]}
              zoom={6}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {parks.map((park) => (
                <Marker
                  key={park.id}
                  position={[park.latitude, park.longitude]}
                  icon={createCustomIcon(visitedParks.includes(park.id) ? '#2196f3' : '#f44336')}
                >
                  <Popup>
                    <Typography variant="subtitle1">{park.name}</Typography>
                    <Typography variant="body2">{park.location}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {park.description}
                    </Typography>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>
        </CardContent>
      </Card>

      {/* Parks List */}
      <Typography variant="h4" gutterBottom>
        California State Parks
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {parks.map((park) => (
          <Paper 
            key={park.id}
            elevation={2}
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                {park.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {park.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {park.location}
              </Typography>
            </Box>
            {currentUser ? (
              <Button
                variant="contained"
                color={visitedParks.includes(park.id) ? "success" : "primary"}
                onClick={() => handleMarkVisited(park.id)}
                disabled={visitedParks.includes(park.id)}
                sx={{ minWidth: 150 }}
              >
                {visitedParks.includes(park.id) ? '✓ Visited' : 'Mark as Visited'}
              </Button>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Login to track your visits
              </Typography>
            )}
          </Paper>
        ))}
      </Box>
      <Box sx={{ height: 90 }} />
    </Container>
  );
};

export default California; 