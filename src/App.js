import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  // console.log('App Effect');

  //Dashboard jsx assigning in variable
  const DahboardComp = (
    <>
      <Header />
      <Dashboard />
    </>
  );

  return (
    //Routes setup
    <>
      <Router>
        <Routes>
          <Route path="/" element={DahboardComp} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
