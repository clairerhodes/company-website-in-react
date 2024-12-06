// src/app.jsx

// imports
import './App.css';
import {useState} from 'react'
import CompanyHistory from './components/CompanyHistory.jsx';
import FounderListItem from './components/FounderListItem.jsx';
import Home from './components/home.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/nav.jsx';
import PastWork from './components/PastWork.jsx';
import Links from './components/Links.jsx';


// ======================================= content =======================================
const App = () => {
// TODO: IMPORT PAGES PROPERLY
  const [currentPage, setCurrentPage] = useState('Home');

  const handleSection = (event) => {
    setCurrentPage(event.target.value)
  }


  return (
    <>
    <Navbar handleSection={handleSection} className="display"/>
    <div className="nav">
      {currentPage === 'Home' ? <Home/> : ""}
      {currentPage === 'CompanyHistory' ? <CompanyHistory/> : ""}
      {currentPage === 'MeetOurTeam' ? <FounderListItem/> : ""}
      {currentPage === 'PastWork' ? <PastWork/> : ""}
      {currentPage === 'Links' ? <Links/> : ""}
      {currentPage === 'Contact' ? <Contact/> : ""}
    </div>
    </>
  );
};

export default App;


// return (
//   <>
//     {/* home page */}
      
//       <Home/>
//     {/* show founders */}
//       {(currentPage === 'founders') ?
//         <FounderListItem/> : <Home/>
//       }
    
//     {/* company history */}
//       {(currentPage === 'history') ?
//         <CompanyHistory/> : <Home/>
//       }
//     {/* past wrok */}
//       {(currentPage === 'pastWork') ?
//         <PastWork/> : <Home/>
//       }
//     {/* contact */}
//       {(currentPage === 'contact') ?
//         <Contact/> : <Home/>
//       }
//     {/* links */}
//       {(currentPage === 'links') ?
//         <Links/> : <Home/>
//       }
//   </>
// );
// };