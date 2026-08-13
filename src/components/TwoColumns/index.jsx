const supportedRatios = new Set(['50-50', '60-40', '40-60']);

export default function TwoColumns({ children, ratio = '50-50' }) {
  const selectedRatio = supportedRatios.has(ratio) ? ratio : '50-50';

  return (
    <div className={`article-two-columns article-two-columns--${selectedRatio}`}>
      {children}
    </div>
  );
}
