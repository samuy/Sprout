import React, { useState, useEffect, useContext } from 'react';
import UserProfileHeader from '../components/UserProfileHeader';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import { SessionContext } from '../contexts/sessionContext';

const DashboardContainer = () => {
  const { currentUser } = useContext(SessionContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/plants', { headers: { userid: '1' } })
      .then((data) => data.json())
      .then((plants) => {
        setImages(plants);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen" id="dashboard-container">
      <UserProfileHeader />
      <Gallery images={images} type="dashboard" />
      <Navigation />
    </div>
  );
};

export default DashboardContainer;
