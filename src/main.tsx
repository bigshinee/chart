import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app.tsx';

import { GlobalStyled } from './styled';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
);
