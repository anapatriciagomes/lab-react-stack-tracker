import { Link } from 'react-router-dom';

function HomePage({ companiesData }) {
  const companies = [...companiesData].map(company => {
    return (
      <div key={company.id} className="company-card">
        <Link to={`/company/${company.slug}`}>
          <h2>{company.name}</h2>
          <img src={company.logo} alt={`${company.name} logo`} />
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-list">{companies}</div>
    </div>
  );
}

export default HomePage;
