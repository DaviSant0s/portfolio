import FilterCertificationsBtn from '../FilterCertificationsBtn';
import './styles.css';

export default function FilterField() {
  return (
    <div className='filterField-container'>
      <div className='filterField-content'>
          <FilterCertificationsBtn name={'All'} selected={true} />
          <FilterCertificationsBtn name={'Backend'}/>
          <FilterCertificationsBtn  name={'Frontend'}/>
          <FilterCertificationsBtn  name={'Linguagens de Programação'}/>
          <FilterCertificationsBtn  name={'Banco de dados'}/>
          <FilterCertificationsBtn  name={'Soft Skills'}/>
          <FilterCertificationsBtn  name={'Outros'}/>
      </div>
    </div>
  )
}
