import './styles.css';

export default function Button({
  name,
  icon,
  handleClick,
  btn_style = {},
  icon_style = {},
  as = 'button',
  type = 'button',
}) {
  const Component = as;
  const isNativeButton = Component === 'button';

  return (
    <Component
      className='button-container'
      style={btn_style}
      {...(isNativeButton
        ? { type, onClick: handleClick }
        : {
            onClick: handleClick,
            role: handleClick ? 'button' : undefined,
          })}
    >
      <span className='button-content'>
        <span style={icon_style} className="material-icons icon-btn">{icon}</span>
        <span className='nameButton'>{name}</span>
      </span>
    </Component>

  )
}
