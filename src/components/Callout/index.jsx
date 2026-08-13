const calloutTypes = {
  info: {
    icon: 'info',
    label: 'Informação',
  },
  warning: {
    icon: 'warning',
    label: 'Atenção',
  },
  success: {
    icon: 'check_circle',
    label: 'Sucesso',
  },
};

export default function Callout({ children, type = 'info', title }) {
  const selectedType = calloutTypes[type] ? type : 'info';
  const { icon, label } = calloutTypes[selectedType];

  return (
    <aside
      className={`article-callout article-callout--${selectedType}`}
      role='note'
      aria-label={title ?? label}
    >
      <span
        className='article-callout__icon material-symbols-outlined'
        aria-hidden='true'
      >
        {icon}
      </span>

      {title &&
        <p className='article-callout__title'>
          {title}
        </p>
      }

      <div className='article-callout__content'>
        {children}
      </div>
    </aside>
  );
}
