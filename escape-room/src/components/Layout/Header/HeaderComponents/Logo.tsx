import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <div className="mt-[24px]">
      <Link to="./">
        <img src="./icons/logo-group.svg" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
