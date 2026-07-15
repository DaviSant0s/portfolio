import tablet from '../../assets/projects/tablet.png';
import ScreenTransparentBtn from '../ScreenTransparentBtn';
import './styles.css';

export default function TabletContainer({ children, link, github, name, stacks}) {
  return (
    <div className='tabletContainer'>
      <img src={tablet} alt="Moldura de tablet do projeto" />
      <div className='screenTable'>
        {children}
        <ScreenTransparentBtn link={link} github={github} name={name} stacks={stacks}/>
      </div>
      <div className='borderBug'/>
    </div>
  )
}
