import React, {useState} from 'react';
import './App.css';
import Disrupt from './components/disruptItem/disruptItem';
import Header from './components/header/headerContextual';
import Search from './components/search/searchContextual';

function App() {
  const [disrupt, setDisrupt] = useState(0);
  const [checked, setChecked] = useState(0);
  const [showSearch, setShowSearch] = useState(0);
  let onClick = (ev, item)=>{
    setChecked(1);
    setShowSearch(0);
    let disruptions = item.lineStatuses.filter((l, item) => l.statusSeverity !== 10);
    let dist = disruptions.reduce((acc, val)=> {
      acc.push(val.disruption.description);
      return acc;
    },[]);
    
    setDisrupt(dist);
  };

  let customMenuHandler = (ev, item)=>{
    setShowSearch(1);
    setChecked(0);
  };

  let customMenuItem = ()=>{
    return {
      name: 'Cycle Hire',
      onClick: customMenuHandler,
      id: 'custom'
    };
  }
  return (
    <div className="App">
      <Header brandText="Welcome to TFL Services" onClick={onClick} customMenu={customMenuItem()}></Header>
      <div className="c-container">
      {Boolean(checked) && <main className="disruptions">
        <Disrupt disrupt={disrupt} checked={checked}/>
      </main>}
      <div className="search">
        {Boolean(showSearch) &&<Search/>}
      </div>
      </div>
    </div>
  );
}

export default App;
