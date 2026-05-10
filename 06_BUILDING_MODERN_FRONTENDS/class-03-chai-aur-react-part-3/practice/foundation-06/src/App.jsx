import { useState } from 'react';

import HookForm from './HookForm';
import ManualForm from './ManualForm';
import './index.css';

function App() {
  const [tab, setTab] = useState('manual');

  return (
    <div>
      <div className="shell">
        <h1>Job Portal</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, error?
        </p>
      </div>
      <div className="tab">
        <button onClick={() => setTab('manual')}>Controlled - Manual</button>
        <button onClick={() => setTab('hook')}>React hook form</button>
      </div>
      <h1>getting started with react</h1>
      {tab === 'manual' ? <ManualForm /> : <HookForm />}
    </div>
  );
}

export default App;
