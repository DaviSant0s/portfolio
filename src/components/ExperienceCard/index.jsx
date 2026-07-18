import MiniCardExp from '../MiniCardExp';

export default function ExperienceCard({ date, logo, institution, description, position, isLast=false }) {
  return (
    <div className={`relative w-full ${isLast ? 'pb-0' : ''}`}>
      <span className="material-symbols-outlined absolute top-6 left-0 z-[1] flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-app bg-primary text-[1.2rem] text-copy-inverse shadow-[0_8px_18px_var(--color-shadow-soft)] max-[370px]:hidden">
        apartment
      </span>
      <MiniCardExp 
        date={date}
        logo={logo} 
        institution={institution} 
        description={description}
        position={position}
      />
    </div>
  )
}
