import clsx from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clsx('max-w-7xl m-auto px-5', className)}>{children}</div>
  );
}