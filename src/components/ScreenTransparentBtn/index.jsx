export default function ScreenTransparentBtn({ link, github, name, stacks=[] }) {
  return (
    <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-[clamp(6px,1.5vw,10px)] overflow-hidden rounded-lg bg-black/45 px-3 opacity-0 backdrop-blur-md transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100'>
      <h2 className='text-center text-[clamp(1rem,2vw,1.3rem)] font-semibold text-copy-inverse drop-shadow-[0_0_6px_rgba(0,0,0,0.32)]'>
        {name}
      </h2>
      {link && 
        <a
          className='inline-flex h-[clamp(26px,8%,30px)] min-w-[clamp(96px,42%,130px)] items-center justify-center rounded-[6px] border border-white/45 bg-white/10 px-4 text-[clamp(0.72rem,1.2vw,0.82rem)] font-medium leading-none text-copy-inverse no-underline transition-all duration-300 ease-out hover:scale-[1.05] hover:bg-white/15 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white/30'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          Site
        </a>

      }

      {github &&
        <a
          className='inline-flex h-[clamp(26px,8%,30px)] min-w-[clamp(96px,42%,130px)] items-center justify-center rounded-[6px] border border-white/45 bg-white/10 px-4 text-[clamp(0.72rem,1.2vw,0.82rem)] font-medium leading-none text-copy-inverse no-underline transition-all duration-300 ease-out hover:scale-[1.05] hover:bg-white/15 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white/30'
          href={github}
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>

      }
      <div className='mt-[clamp(8px,1.6vw,10px)] flex h-fit flex-wrap items-center justify-center gap-[5px]'>


        {stacks.map((logo, index) => (

          <div key={index} className='h-fit w-fit overflow-hidden drop-shadow-[0_0_10px_rgba(76,76,76,0.72)]'>
            <img className='h-[clamp(16px,1.6vw,20px)] object-cover' src={logo} alt="Tecnologia do projeto" />
          </div>

        ))}


      </div>
    </div>
  )
}
