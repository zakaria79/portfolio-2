import React from 'react';
import './App.css';
import AppBar from './components/app-bar/AppBar';
import Drawer from './components/drawer/Drawer';

function App() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [side]: open});
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppBar toggleDrawer={toggleDrawer} />
        <Drawer toggleDrawer={toggleDrawer} state={state} />
      </header>
    </div>
  );
}

export default App;
