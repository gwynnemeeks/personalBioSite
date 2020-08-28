// import firebase from 'firebase';
// import apiKeys from './helpers/data/apiKeys.json';

import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import clickEvents from './components/clickEvents/clickEvents';

const init = () => {
  // firebase.initializeApp(apiKeys.firebaseConfig);
  navBar.buildNavBar();
  clickEvents.clickEvents();
};

init();
