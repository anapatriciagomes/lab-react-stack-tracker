import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import companies from './companies.json';
import technologies from './technologies.json';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const [companiesData, setCompaniesData] = useState(companies);
  const [technologiesData, setTechnologiesData] = useState(technologies);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companiesData={companiesData} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companiesData={companiesData} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologiesData={technologiesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
