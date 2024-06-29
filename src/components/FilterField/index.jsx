import { useCertification } from '../../context/CertificationsContext';
import FilterCertificationsBtn from '../FilterCertificationsBtn';
import './styles.css';

export default function FilterField() {

  const { setFilterCards } = useCertification();

  const handleClickFilter = (type) => {
    if(type === 'all') {
      setFilterCards('all');
      return;
    };

    if(type === 'back') { 
      setFilterCards('back');
      return;
    };

    if(type === 'front') {
      setFilterCards('front');
      return;
    };

    if(type === 'languages') {
      setFilterCards('languages');
      return;
    };

    if(type === 'database') {
      setFilterCards('database');
      return;
    };

    if(type === 'softskills') {
      setFilterCards('softskills');
      return;
    };

    if(type === 'others') {
      setFilterCards('others');
      return;
    };
  }

  return (
    <div className='filterField-container'>
      <div className='filterField-content'>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='all' name={'Tudo'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='back'name={'Backend'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='front' name={'Frontend'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='languages' name={'Linguagens'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='database' name={'Banco de dados'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='softskills' name={'Soft Skills'}/>
          <FilterCertificationsBtn handleClick={handleClickFilter} type='others' name={'Outros'}/>
      </div>
    </div>
  )
}
