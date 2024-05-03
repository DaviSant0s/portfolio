import './styles.css';

export default function SkillsCard({ image, name, style_image }) {
  return (
    <div className='skillCard-container'>
        <div className='image-skill'>
            <img style={style_image} src={image} alt="" />
            <p>{name}</p>
        </div>
    </div>
  )
}
