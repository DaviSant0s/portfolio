import { useCertification } from '../../context/CertificationsContext';
import './styles.css';

export default function FilterCertificationsBtn( {name, handleClick, type} ){

  const { filterCards } = useCertification();

  return (
    <div 
    onClick={() => handleClick(type)} 
    className={`filterCertificationsBtn-conatiner ${filterCards === type ? 'selectedFilterCertifications' : 'notSelectedFilterCertifications'}`}>
      {name}
    </div>
  )
}
