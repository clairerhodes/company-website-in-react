// src/app.jsx

// imports
import './App.css';
import CompanyHistory from './components/CompanyHistory.jsx';
import FounderListItem from './components/FounderListItem.jsx';


// ======================================= content =======================================
const App = () => {
// TODO: IMPORT PAGES PROPERLY
// TODO: MAKE CURRENT PAGE STATE

  return (
    <>
      {/* home page */}
        {/* {(currentPage === 'home') ?
          <Home/> : null
        } */}
        <Home/>
      {/* show founders */}
        {(currentPage === 'founders') ?
          <FounderListItem/> : <Home/>
        }
      
      {/* company history */}
        {(currentPage === 'history') ?
          <CompanyHistory/> : <Home/>
        }
      {/* past wrok */}
        {(currentPage === 'pastWork') ?
          <PastWork/> : <Home/>
        }
      {/* contact */}
        {(currentPage === 'contact') ?
          <Contact/> : <Home/>
        }
      {/* links */}
        {(currentPage === 'links') ?
          <Links/> : <Home/>
        }
    </>
  );
};

export default App;