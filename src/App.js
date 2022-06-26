import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Card from './components/Card';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import EditePosts from './components/EditePosts';

function App() {
  const DahboardComp = (
    <>
      <Header />
      <Dashboard />
    </>
  );
  const Cards = (
    <>
      <Header />
      <Card />
    </>
  );
  const EditePost = (
    <>
      <Header />
      <EditePosts />
    </>
  );
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/cards" element={Cards} /> */}
          <Route path="/cards/:id" element={EditePost} />
          <Route path="/" element={DahboardComp} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
