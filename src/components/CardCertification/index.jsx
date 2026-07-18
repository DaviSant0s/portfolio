import ModalCertification from '../ModalCertification';
import { useState } from 'react';

export default function CardCertification(
  {
    status=false, 
    img=null, 
    icon, 
    name, 
    description, 
    institution, 
    conclusion, 
    duration, 
    link_institution='', 
    style_icone={}, 
    style_title={}
  }) {

  const [ isOpen, setIsOpen ] = useState(false);
  const statusLabel = status ? 'Concluído' : 'Fazendo';
  const diamondClassName = status ? 'bg-state-success-strong' : 'bg-state-warning';
  const badgeClassName = status ? 'bg-state-success' : 'bg-state-warning';

  
  return (
    <div className='h-full w-full'>
      <div className='relative h-full rounded-xl transition-transform duration-300 ease-out hover:-translate-y-1'>
        <div className={`absolute left-[-4px] top-[27px] size-4 rotate-45 rounded-[2px] ${diamondClassName}`}></div>
        
        <article className='relative z-[2] flex h-full w-full flex-col rounded-xl border border-outline bg-panel-muted shadow-panel transition-all duration-200 ease-out hover:border-primary-soft hover:bg-panel-hover-strong'>
          <div className='flex h-[45px] w-full items-center'>
            <div className={`relative left-[-8px] rounded-r-[3px] rounded-l-[2px] px-[10px] py-[1px] text-sm font-bold shadow-[0_1px_var(--color-shadow-soft)] ${badgeClassName}`}>
              <span className='leading-none text-copy-inverse'>{statusLabel}</span>
            </div>
          </div>
          <div className='flex min-h-[200px] gap-3 rounded-b-xl px-[10px] pr-[15px] pb-[15px]'>
            <div className='hidden w-[70px] justify-center min-[391px]:flex'>
              <div className='flex size-[35px] items-center justify-center overflow-hidden'>
                {img &&
                  <img
                    style={style_icone}
                    className='h-full w-full object-contain'
                    src={img}
                    alt={`Instituição ${institution}`}
                  />
                }
                {!img &&
                  <i style={style_icone} className={`${icon} text-[2.3em]`} />
                }
              </div>
            </div>
            <div className='flex h-full flex-1 flex-col pt-[5px]'>
              <h2 style={style_title} className='w-full text-[1.35rem] font-semibold leading-none text-copy-strong'>
                {name}
              </h2>
              <div className='mt-[5px] mb-[10px] min-h-[2.8rem] font-display text-[1rem] font-normal leading-snug text-copy'>
                {description}
              </div>
      
              <div className='flex items-start gap-[5px]'>
                <span className='shrink-0 font-display text-[1rem] font-bold text-copy-strong'>Instituição:</span>
                <p className='text-[0.96rem] leading-snug text-copy'>
                  <a
                    className='transition-colors duration-200 hover:underline'
                    target='_blank'
                    rel='noreferrer'
                    href={link_institution}
                  >
                    {institution}
                  </a>
                </p>
              </div>
              <div className='flex items-start gap-[5px]'>
                <span className='shrink-0 font-display text-[1rem] font-bold text-copy-strong'>Duração:</span>
                <p className='text-[0.96rem] leading-snug text-copy'>{duration}</p>
              </div>
              <div className='flex items-start gap-[5px]'>
                <span className='shrink-0 font-display text-[1rem] font-bold text-copy-strong'>Conclusão:</span>
                <p className='text-[0.96rem] leading-snug text-copy'>{conclusion}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ModalCertification isOpen={isOpen} setIsOpen={setIsOpen} status={status}/>
    </div>
  )
}
