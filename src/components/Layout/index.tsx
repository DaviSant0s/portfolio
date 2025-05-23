import clsx from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
  urlImage?: string;
};

export default function Layout({ children, className, urlImage }: LayoutProps) {
  return (
    <div
      className={clsx(
        'w-full h-full',
        `bg-[url(${urlImage})] bg-no-repeat bg-cover bg-center`
      )}
    >
      <div className={clsx('max-w-7xl h-full m-auto px-5', className)}>
        {children}
      </div>
    </div>
  );
}
