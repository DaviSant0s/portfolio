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
    mediaClassName=''
  }) {

  const [ isOpen, setIsOpen ] = useState(false);
  const statusLabel = status ? 'Concluído' : 'Fazendo';
  const diamondClassName = status ? 'bg-state-success-strong' : 'bg-state-warning';
  const badgeClassName = status ? 'bg-state-success' : 'bg-state-warning';

  
  return (
    <div className='h-full w-full'>
      <div className='relative h-full rounded-xl transition-transform duration-300 ease-out hover:-translate-y-1'>
        <div className={`absolute left-[-4px] top-[24px] size-4 rotate-45 rounded-[2px] ${diamondClassName} min-[500px]:top-[27px]`}></div>
        
        <article className='relative z-[2] flex h-full w-full flex-col rounded-xl border border-outline bg-panel-muted shadow-panel transition-all duration-200 ease-out hover:border-primary-soft hover:bg-panel-hover-strong'>
          <div className='flex h-[42px] w-full items-center min-[500px]:h-[45px]'>
            <div className={`relative left-[-8px] rounded-r-[3px] rounded-l-[2px] px-[10px] py-[1px] text-[0.78rem] font-bold shadow-[0_1px_var(--color-shadow-soft)] min-[500px]:text-sm ${badgeClassName}`}>
              <span className='leading-none text-copy-inverse'>{statusLabel}</span>
            </div>
          </div>
          <div className='flex min-h-[188px] gap-2.5 rounded-b-xl px-4 pb-4 min-[500px]:min-h-[200px] min-[500px]:gap-3 min-[500px]:px-[10px] min-[500px]:pr-[15px] min-[500px]:pb-[15px]'>
            <div className='hidden w-[62px] justify-center min-[391px]:flex min-[500px]:w-[70px]'>
              <div className='flex size-[35px] items-center justify-center overflow-hidden'>
                {img &&
                  <img
                    className={`h-full w-full rounded-[3px] object-contain ${mediaClassName}`.trim()}
                    src={img}
                    alt={`Instituição ${institution}`}
                  />
                }
                {!img &&
                  <i className={`${icon} text-[2.3em] ${mediaClassName}`.trim()} />
                }
              </div>
            </div>
            <div className='flex h-full flex-1 flex-col pt-1.5 min-[500px]:pt-[5px]'>
              <h2 className='w-full text-[1.15rem] font-semibold leading-[1.05] tracking-[-0.02em] text-copy-strong min-[500px]:text-[1.35rem] min-[500px]:leading-none'>
                {name}
              </h2>
              <div className='mt-[6px] mb-[10px] min-h-[2.6rem] text-[0.92rem] font-normal leading-[1.45] text-copy min-[500px]:mt-[5px] min-[500px]:min-h-[2.8rem] min-[500px]:font-display min-[500px]:text-[1rem] min-[500px]:leading-snug'>
                {description}
              </div>
      
              <div className='flex items-start gap-[5px]'>
                <span className='shrink-0 text-[0.92rem] font-bold text-copy-strong min-[500px]:font-display min-[500px]:text-[1rem]'>Instituição:</span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.96rem]'>
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
                <span className='shrink-0 text-[0.92rem] font-bold text-copy-strong min-[500px]:font-display min-[500px]:text-[1rem]'>Duração:</span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.96rem]'>{duration}</p>
              </div>
              <div className='flex items-start gap-[5px]'>
                <span className='shrink-0 text-[0.92rem] font-bold text-copy-strong min-[500px]:font-display min-[500px]:text-[1rem]'>Conclusão:</span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.96rem]'>{conclusion}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ModalCertification isOpen={isOpen} setIsOpen={setIsOpen} status={status}/>
    </div>
  )
}
