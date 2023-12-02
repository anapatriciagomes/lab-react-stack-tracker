import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companiesData }) {
  const { companySlug } = useParams();

  const selectedCompany = companiesData.find(
    company => company.slug === companySlug
  );

  const techStack = selectedCompany.techStack.map((tech, index) => {
    return (
      <Link
        to={`/tech/${tech.slug}?company=${companySlug}`}
        key={index}
        className="tech-card"
      >
        <div className="tech-image-card">
          <img src={tech.image} alt="tech logo" />
        </div>
        <h4>{tech.name}</h4>
      </Link>
    );
  });

  const selectedCompanyDetails = () => {
    return (
      <div>
        <div className="company-details">
          <img src={selectedCompany.logo} alt="logo" />
          <div className="company-description">
            <h2>{selectedCompany.name}</h2>
            <h3>About</h3>
            <p>{selectedCompany.description}</p>
          </div>
        </div>
        <div className="tech-stack">{techStack}</div>
      </div>
    );
  };

  return (
    <div>
      <h1>Company Profile</h1>
      {selectedCompanyDetails()}
    </div>
  );
}

export default CompanyPage;
