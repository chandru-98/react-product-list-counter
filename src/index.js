import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Product from './components/Products';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Product />
  </StrictMode>
);
