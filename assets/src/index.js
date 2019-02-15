import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { HOME_URL } from './utils/constants';

import '../css/index.css';
import '../css/App.css'

const libraryContainer = document.getElementById('libraries');
const libraryName = libraryContainer ? libraryContainer.getAttribute('data-library-name') : null;

ReactDOM.render(
  <Header showMenu={window.location.pathname !== HOME_URL} libraryName={libraryName} />,
  document.getElementById('app-bar')
);
