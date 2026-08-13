export default function ArticleImage({ src, alt = '', caption }) {
  return (
    <figure className='article-image'>
      <img
        src={src}
        alt={alt}
        loading='lazy'
        decoding='async'
        className='article-image__media'
      />

      {caption &&
        <figcaption className='article-image__caption'>
          {caption}
        </figcaption>
      }
    </figure>
  );
}
