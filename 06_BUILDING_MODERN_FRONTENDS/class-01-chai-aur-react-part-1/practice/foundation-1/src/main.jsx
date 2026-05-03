import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Prashant from './Prashant.jsx';
import Shubham from './Shubham.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <Prashant />
    <Shubham />
  </div>
);
