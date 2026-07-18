import tablet from '../../assets/projects/tablet.png';
import ScreenTransparentBtn from '../ScreenTransparentBtn';

export default function TabletContainer({ children, link, github, name, stacks}) {
  return (
    <div className='group relative h-full w-full rounded-[15px]'>
      <img className='h-full w-full select-none object-contain' src={tablet} alt="Moldura de tablet do projeto" />
      <div className='absolute top-[2.79%] right-[2.44%] bottom-[2.79%] left-[2.09%] z-10 overflow-hidden rounded-lg bg-black'>
        {children}
        <ScreenTransparentBtn link={link} github={github} name={name} stacks={stacks}/>
      </div>
      <div className='pointer-events-none absolute top-[2.26%] right-[2.26%] bottom-[2.26%] left-[1.92%] z-10 rounded-[9px] border-2 border-black bg-transparent outline-2 outline-black'/>
    </div>
  )
}
