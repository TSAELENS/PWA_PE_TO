import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.pushManager.getSubscription().then(function(subscription) {
          if (subscription === null) {
            // Demande de permission pour les notifications push
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: 'VOTRE_PUBLIC_VAPID_KEY'
                }).then(function(subscription) {
                  console.log('Subscribed:', subscription);
                }).catch(function(error) {
                  console.error('Subscription error:', error);
                });
              }
            });
          }
        });
      });
    }
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
