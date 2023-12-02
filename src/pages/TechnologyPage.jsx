import { Link, useParams, useSearchParams } from 'react-router-dom';

function TechnologyPage({ technologiesData }) {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get('company');

  const selectedTech = technologiesData.find(tech => tech.slug === slug);

  const selectedTechDetails = () => {
    return (
      <div className="tech-details">
        <img src={selectedTech.image} alt="logo" />
        <div className="tech-description">
          <h2>{selectedTech.name}</h2>
          <h3>About</h3>
          <p>{selectedTech.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Technology Details</h1>
      {selectedTechDetails()}
      <Link to={`/company/${companySlug}`} className="back-button">
        Back
      </Link>
    </div>
  );
}

export default TechnologyPage;
