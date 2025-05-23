import Layout from '../Layout';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="w-full h-14 border-b bg-white">
      <Layout className="h-full">
        <div className="w-full h-full">
          <nav className="w-full h-full flex items-center justify-between gap-5">
            <Link className="w-28 h-fit text-2xl font-bold" to="/">
              Meu site
            </Link>
            <div className="flex items-center justify-between gap-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Sobre</NavLink>
              <NavLink to="/">Serviços</NavLink>
              <NavLink to="/">Portfólio</NavLink>
            </div>
            <div><Button variant={'default'}>Contato</Button></div>
          </nav>
        </div>
      </Layout>
    </header>
  );
}
