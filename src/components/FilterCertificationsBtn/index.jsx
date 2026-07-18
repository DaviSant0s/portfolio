import { useCertification } from '../../context/CertificationsContext';

export default function FilterCertificationsBtn({ name, handleClick, type }) {
  const { filterCards } = useCertification();
  const isSelected = filterCards === type;
  const className = [
    'relative inline-flex h-fit w-fit select-none rounded-[10px] border px-[10px] py-[5px] text-[0.8em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    isSelected
      ? 'bg-accent-gradient border-transparent text-copy-inverse hover:bg-accent-gradient-hover'
      : 'bg-neutral-gradient-strong border-outline text-copy hover:bg-neutral-gradient-hover',
  ].join(' ');

  return (
    <button
      type='button'
      onClick={() => handleClick(type)}
      aria-pressed={isSelected}
      className={className}
    >
      {name}
    </button>
  )
}
