import CardCertification from '../../components/CardCertification';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-scroll';
import FilterCertificationsBtn from '../../components/FilterCertificationsBtn';
import { useCertification } from '../../context/CertificationsContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';
import './styles.css';

export default function Certifications() {

  const { certificationFilters, filterCards, filteredData, setFilterCards } = useCertification();
  const { ref } = useTrackActiveSection('certifications');

  const [ moreCardsBool, setMoreCardsBool ] = useState(false);

  const handleClickBtnMoreCardsBool = () => {
    setMoreCardsBool(true)
  }

  const handleClickBtnLessCardsBool = () => {
    setTimeout(() => {
      setMoreCardsBool(false)
    }, 100)
  }

  useEffect(() => {
    setMoreCardsBool(false);
  }, [filterCards]);

  return (
    <div ref={ref} className='certifications-container' id='id_certifications'>
      <div 
      className={`certifications-content ${moreCardsBool ? 'certifications-viewMore-true' : 'certifications-viewMore-false'}`}

      style={{paddingBottom: `${filteredData.length <= 6 ? '40px' : ''}`}}
      
      >

        <h1 id='id_title_certifications'>
          Certificações
        </h1>
        <div className='certifications-filters'>
          {certificationFilters.map((filter) => (
            <FilterCertificationsBtn
              key={filter.key}
              name={filter.label}
              type={filter.key}
              handleClick={setFilterCards}
            />
          ))}
        </div>

        {filteredData.length > 0 &&
          <div className={`cards-certifications-grid ${moreCardsBool ? 'cards-certifications-grid-viwMore-true' : 'cards-certifications-grid-viwMore-false'}`}

            style={{

              height: `${filteredData.length <= 6 ? 'max-content' : ''}`,
              width: `${filteredData.length === 1 ? '370px': (filteredData.length === 2 ? '740px' : '')}`
            
            }}
          
          
          >

            {filteredData.map((data) => {

              return(
              <div key={data.id}>
                <CardCertification
                  icon={data.icon}
                  img={data.img}
                  name={data.name}
                  description={data.description}
                  institution={data.institution}
                  conclusion={data.conclusion}
                  duration={data.duration}
                  link_institution={data.link_institution}
                  style_icone={data.style_icone}
                  status={data.status}
                />
              </div>
              );
                
            })}
              
          </div>
        }

        {filteredData.length === 0 &&
          <div className='certifications-empty-state'>
            Nenhuma certificação encontrada nesta categoria ainda.
          </div>
        }
      </div>

      {filteredData.length > 6 && 
      
      
        <div 
          className={`trasparentCards ${moreCardsBool ? 'trasparentCards-viewMore-true': 'trasparentCards-viewMore-false'}`}
        >
          <div className='btn-container-transparentCards'>

            {!moreCardsBool &&
            
              <Button
                handleClick={handleClickBtnMoreCardsBool}
                name='Ver mais'
                icon={'expand_more'}
                icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
                btn_style={{
                  paddingLeft: '30px',
                  paddingRight: '40px',
                  border: '2px solid var(--color-border-strong)'
                }}
              />
            }

            {moreCardsBool &&
              <Link
              to={'id_certifications'}
              smooth={true} offset={-79}
              duration={300}>
            
                  <Button
                    as='span'
                    handleClick={handleClickBtnLessCardsBool}
                    name='Ver menos'
                    icon={'expand_less'}
                    btn_style={{paddingLeft: '30px', paddingRight: '40px', border: '2px solid var(--color-border-strong)'}}
                    icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
                  />

              </Link>
            }
          </div>
        </div> 
      
      }

    </div>
  );
}
