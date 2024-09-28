import './styles.css';

export default function SkillsCard({ image, name, style_image }) {
  return (
    <div className='skillCard-container'>
        <div className='skillCard-content'>
          <div className='skillCard-content-content'>
            <div className='image-skill'>
                <img style={style_image} src={image} alt="" />
            </div>
          </div>
          <p>{name}</p>
        </div>
    </div>
  )
}
