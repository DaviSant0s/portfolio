import { useCertification } from '../../context/CertificationsContext';

export default function FilterCertificationsBtn({ name, handleClick, type }) {
  const { filterCards } = useCertification();
  const isSelected = filterCards === type;
  const className = [
    'relative inline-flex min-h-9 w-fit select-none items-center rounded-full border px-3.5 py-1.5 text-[0.84rem] font-medium leading-none tracking-[-0.01em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    isSelected
      ? 'bg-accent-gradient border-transparent text-copy-inverse shadow-[0_10px_20px_-16px_var(--color-shadow-lg)] hover:bg-accent-gradient-hover'
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
