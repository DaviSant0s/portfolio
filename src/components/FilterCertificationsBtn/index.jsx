import './styles.css';

export default function FilterCertificationsBtn( {name, selected=false} ) {
  return (
    <div className={`filterCertificationsBtn-conatiner ${selected ? 'selectedFilterCertifications' : 'notSelectedFilterCertifications'}`}>
      {name}
    </div>
  )
}
