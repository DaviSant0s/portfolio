import TabletContainer from '../TabletContainer';

export default function CarouselCard({ img, link, github, name, stacks }) {
  return (
    <div className='relative w-full aspect-[300/373.5] rounded-[15px]'>
      <TabletContainer link={link} github={github} name={name} stacks={stacks}>
        <img className='h-full w-full rounded-lg object-cover' src={img} alt={`Prévia do projeto ${name}`} />
      </TabletContainer>
    </div>
  );
}
