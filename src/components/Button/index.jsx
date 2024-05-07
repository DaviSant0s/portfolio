import './styles.css';

export default function Button({name, icon, handleClick, btn_style={}, icon_style={}}) {
  return (
    <div onClick={handleClick} style={btn_style} className='button-container'>
      <div className='button-content'>
        <span style={icon_style} className="material-icons icon-btn">{icon}</span>
        <span className='nameButton'>{name}</span>
      </div>
    </div>

  )
}
