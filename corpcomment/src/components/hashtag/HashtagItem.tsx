type HashtagItemProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

const HashtagItem = ({ onSelectCompany, company }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>{company}</button>
    </li>
  );
};

export default HashtagItem;
