import CompanyCard from "./CompanyCard";

function CompanyGrid({ companies }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}

    </div>
  );
}

export default CompanyGrid;