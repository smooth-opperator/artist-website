import React from 'react';
import './App.css';
import ExhibitionList from './components/ExhibitionList';
import InstallationsList from './components/InstallationsList';
import VideosList from './components/VideoList';
import InfosList from './components/InfoList';
import Sidebar from './components/Sidebar';
import { MainContainer } from './styles';

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <ExhibitionList />
      <InstallationsList />
      <VideosList />
      <InfosList />
    </MainContainer>
  );
}

export default App;
