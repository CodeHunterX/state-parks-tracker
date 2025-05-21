import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tennessee from './pages/Tennessee';
import Georgia from './pages/Georgia';
import Alabama from './pages/Alabama';
import Mississippi from './pages/Mississippi';
import Florida from './pages/Florida';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import SouthCarolina from './pages/SouthCarolina';
import NorthCarolina from './pages/NorthCarolina';
import Arkansas from './pages/Arkansas';
import Delaware from './pages/Delaware';
import Kentucky from './pages/Kentucky';
import Louisiana from './pages/Louisiana';
import Maryland from './pages/Maryland';
import Oklahoma from './pages/Oklahoma';
import Texas from './pages/Texas';
import Virginia from './pages/Virginia';
import WestVirginia from './pages/WestVirginia';
import Connecticut from './pages/Connecticut';
import Maine from './pages/Maine';
import Massachusetts from './pages/Massachusetts';
import NewHampshire from './pages/NewHampshire';
import RhodeIsland from './pages/RhodeIsland';
import Vermont from './pages/Vermont';
import NewJersey from './pages/NewJersey';
import NewYork from './pages/NewYork';
import Pennsylvania from './pages/Pennsylvania';
import Illinois from './pages/Illinois';
import Indiana from './pages/Indiana';
import Michigan from './pages/Michigan';
import Ohio from './pages/Ohio';
import Wisconsin from './pages/Wisconsin';
import Iowa from './pages/Iowa';
import Kansas from './pages/Kansas';
import Minnesota from './pages/Minnesota';
import Missouri from './pages/Missouri';
import Nebraska from './pages/Nebraska';
import NorthDakota from './pages/NorthDakota';
import SouthDakota from './pages/SouthDakota';
import Alaska from './pages/Alaska';
import Arizona from './pages/Arizona';
import California from './pages/California';
import Colorado from './pages/Colorado';
import Hawaii from './pages/Hawaii';
import Idaho from './pages/Idaho';
import Montana from './pages/Montana';
import Nevada from './pages/Nevada';
import NewMexico from './pages/NewMexico';
import Oregon from './pages/Oregon';
import Utah from './pages/Utah';
import Washington from './pages/Washington';
import Wyoming from './pages/Wyoming';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route 
            path="/tennessee" 
            element={
              <PrivateRoute>
                <Tennessee />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/georgia" 
            element={
              <PrivateRoute>
                <Georgia />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/alabama" 
            element={
              <PrivateRoute>
                <Alabama />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/mississippi" 
            element={
              <PrivateRoute>
                <Mississippi />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/florida" 
            element={
              <PrivateRoute>
                <Florida />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/south-carolina" 
            element={
              <PrivateRoute>
                <SouthCarolina />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/north-carolina" 
            element={
              <PrivateRoute>
                <NorthCarolina />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/arkansas" 
            element={
              <PrivateRoute>
                <Arkansas />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/delaware" 
            element={
              <PrivateRoute>
                <Delaware />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/kentucky" 
            element={
              <PrivateRoute>
                <Kentucky />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/louisiana" 
            element={
              <PrivateRoute>
                <Louisiana />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/maryland" 
            element={
              <PrivateRoute>
                <Maryland />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/oklahoma" 
            element={
              <PrivateRoute>
                <Oklahoma />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/texas" 
            element={
              <PrivateRoute>
                <Texas />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/virginia" 
            element={
              <PrivateRoute>
                <Virginia />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/west-virginia" 
            element={
              <PrivateRoute>
                <WestVirginia />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/connecticut" 
            element={
              <PrivateRoute>
                <Connecticut />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/maine" 
            element={
              <PrivateRoute>
                <Maine />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/massachusetts" 
            element={
              <PrivateRoute>
                <Massachusetts />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/new-hampshire" 
            element={
              <PrivateRoute>
                <NewHampshire />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/rhode-island" 
            element={
              <PrivateRoute>
                <RhodeIsland />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/vermont" 
            element={
              <PrivateRoute>
                <Vermont />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/new-jersey" 
            element={
              <PrivateRoute>
                <NewJersey />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/new-york" 
            element={
              <PrivateRoute>
                <NewYork />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pennsylvania" 
            element={
              <PrivateRoute>
                <Pennsylvania />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/illinois" 
            element={
              <PrivateRoute>
                <Illinois />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/indiana" 
            element={
              <PrivateRoute>
                <Indiana />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/michigan" 
            element={
              <PrivateRoute>
                <Michigan />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/ohio" 
            element={
              <PrivateRoute>
                <Ohio />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/wisconsin" 
            element={
              <PrivateRoute>
                <Wisconsin />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/iowa" 
            element={
              <PrivateRoute>
                <Iowa />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/kansas" 
            element={
              <PrivateRoute>
                <Kansas />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/minnesota" 
            element={
              <PrivateRoute>
                <Minnesota />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/missouri" 
            element={
              <PrivateRoute>
                <Missouri />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/nebraska" 
            element={
              <PrivateRoute>
                <Nebraska />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/north-dakota" 
            element={
              <PrivateRoute>
                <NorthDakota />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/south-dakota" 
            element={
              <PrivateRoute>
                <SouthDakota />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/alaska" 
            element={
              <PrivateRoute>
                <Alaska />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/arizona" 
            element={
              <PrivateRoute>
                <Arizona />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/california" 
            element={
              <PrivateRoute>
                <California />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/colorado" 
            element={
              <PrivateRoute>
                <Colorado />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/hawaii" 
            element={
              <PrivateRoute>
                <Hawaii />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/idaho" 
            element={
              <PrivateRoute>
                <Idaho />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/montana" 
            element={
              <PrivateRoute>
                <Montana />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/nevada" 
            element={
              <PrivateRoute>
                <Nevada />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/new-mexico" 
            element={
              <PrivateRoute>
                <NewMexico />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/oregon" 
            element={
              <PrivateRoute>
                <Oregon />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/utah" 
            element={
              <PrivateRoute>
                <Utah />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/washington" 
            element={
              <PrivateRoute>
                <Washington />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/wyoming" 
            element={
              <PrivateRoute>
                <Wyoming />
              </PrivateRoute>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
