import { useCertification } from '../../context/CertificationsContext';
import './styles.css';

export default function FilterCertificationsBtn({ name, handleClick, type }) {

  const { filterCards } = useCertification();
  const isSelected = filterCards === type;

  return (
    <button
      type='button'
      onClick={() => handleClick(type)}
      aria-pressed={isSelected}
      className={`filterCertificationsBtn-conatiner ${isSelected ? 'selectedFilterCertifications' : 'notSelectedFilterCertifications'}`}
    >
      {name}
    </button>
  )
}
