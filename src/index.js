import React from 'react';
import ReactDOM from 'react-dom';


import styles from '../styles.css';
import App from './App';

function render(Component) {
    ReactDOM.render(
      <App></App>,
        document.getElementById('root')
    );
}

render(App);

