import React from 'react';
import ReactDOM from 'react-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/Layout/MainNavigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/Favorites-context';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <BrowserRouter>
        <FavoritesContextProvider>
        <Layout>
    {/* <App /> */}
    <Routes>
        <Route path='/AllMeetups' element={<AllMeetupsPage />} />
        <Route path='/NewMeetup' element={<NewMeetupPage  />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
    </Routes>
    </Layout>
    </FavoritesContextProvider>
  </BrowserRouter>
    
);