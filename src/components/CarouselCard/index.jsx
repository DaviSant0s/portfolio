import TabletContainer from '../TabletContainer';

export default function CarouselCard({ img, link, github, name, stacks }) {
  return (
    <div className='relative aspect-[300/373.5] w-full max-w-[330px] rounded-[15px] min-[420px]:max-w-[360px] min-[691px]:max-w-none'>
      <TabletContainer link={link} github={github} name={name} stacks={stacks}>
        <img className='h-full w-full rounded-lg object-cover' src={img} alt={`Prévia do projeto ${name}`} />
      </TabletContainer>
    </div>
  );
}
