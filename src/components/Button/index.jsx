import './styles.css';

export default function Button({name, icon}) {
  return (
    <div className='button-container'>
      <div className='button-content'>
        <span  className="material-icons icon-btn">{icon}</span>
        {name}
      </div>
    </div>

  )
}
