import React from 'react';
import Store from './store/StoreWrapper';
import SidePanel from './SideBar/SidePanel';
import Viewer from './Preview/Viewer';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import './App.css';

Amplify.configure(aws_exports);

const App = () => (
  <div className="App">
    <Store>
      <SidePanel />
      <Viewer />
    </Store>  
  </div>
);

export default App;
