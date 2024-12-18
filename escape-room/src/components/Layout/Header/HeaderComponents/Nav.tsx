import { Link } from 'react-router-dom';

interface NavItem {
  text: string;
  to: string;
}

const navItems: NavItem[] = [
  { text: 'КВЕСТИ', to: '/' },
  { text: 'НОВИЧКАМ', to: '/' },
  { text: 'ВІДГУКИ', to: '/' },
  { text: 'АКЦІЇ', to: '/' },
  { text: 'КОНТАКТИ', to: '/' },
];

function Nav(): JSX.Element {
  return (
    <div className='mr-[7px]'>
      <ul className="flex justify-center items-center gap-[47px] text-white">
        {navItems.map((item) => (
          <li key={item.to} className="hover:text-orange tracking-extra-sm">
            <Link to={item.to}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;