import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Prashant from './Prashant.jsx';
import Shubham from './Shubham.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>This is the main.jsx component of src folder.</h1>
    <App />
    <Prashant />
    <Shubham />
  </div>
);
