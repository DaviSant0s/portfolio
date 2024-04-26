import './styles.css';

export default function Logo(style_portfolio={}, style_daviSantos={}) {
  return (
    <div className='logo-container'>
      <h1 style={style_portfolio}>Portfólio</h1>
      <span style={style_daviSantos}>DaviSantos</span>
    </div>
  )
}