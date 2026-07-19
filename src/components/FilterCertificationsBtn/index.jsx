import { useCertification } from '../../context/CertificationsContext';

export default function FilterCertificationsBtn({ name, handleClick, type }) {
  const { filterCards } = useCertification();
  const isSelected = filterCards === type;
  const className = [
    'relative inline-flex min-h-9 w-fit select-none items-center rounded-full border px-3.5 py-2 text-[0.8rem] font-medium leading-none tracking-[-0.01em] shadow-[0_14px_30px_-24px_var(--color-shadow-md)] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:px-4 min-[500px]:text-[0.84rem]',
    isSelected
      ? 'border-[#15181d] bg-[#15181d] text-white hover:bg-[#0f1115] dark:border-white dark:bg-white dark:text-[#12161d] dark:hover:bg-[#f4f7fa]'
      : 'border-outline/70 bg-panel/82 text-copy-muted backdrop-blur-sm hover:border-copy-soft hover:bg-panel hover:text-copy-strong',
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
