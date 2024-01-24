import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NotesContextProvider } from './services/store/NotesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotesContextProvider>
    <App />
  </NotesContextProvider>
);
