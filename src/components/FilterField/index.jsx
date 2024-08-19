import { useCertification } from '../../context/CertificationsContext';
import FilterCertificationsBtn from '../FilterCertificationsBtn';
import InputSelect from '../InputSelect';
import './styles.css';

export default function FilterField() {

  const { setFilterCards } = useCertification();

  const handleClickFilter = (type) => {
    if(type === 'tudo') {
      setFilterCards('all');
      return;
    };

    if(type === 'backend') { 
      setFilterCards('backend');
      return;
    };

    if(type === 'frontend') {
      setFilterCards('frontend');
      return;
    };

    if(type === 'linguagens') {
      setFilterCards('linguagens');
      return;
    };

    if(type === 'banco de dados') {
      setFilterCards('banco de dados');
      return;
    };

    if(type === 'softskills') {
      setFilterCards('softskills');
      return;
    };

    if(type === 'outros') {
      setFilterCards('outros');
      return;
    };
  }

  return (
    <div className='filterField-container'>
      <div className='filterField-content'>

        <InputSelect width={'100%'} options={['Tudo', 'Backend', 'Frontend', 'Linguagens', 'Banco de dados', 'Soft Skills', 'Outros']} handle_function={handleClickFilter}/>
      </div>
    </div>
  )
}
