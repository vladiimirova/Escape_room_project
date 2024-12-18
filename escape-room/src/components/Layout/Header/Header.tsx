import Logo from './HeaderComponents/Logo';
import Nav from './HeaderComponents/Nav';
import Contact from './HeaderComponents/Contact';

function Header(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 w-full  font-raleway font-600 text-white z-50 flex justify-center h-[74px] ">
      <div className="container">
        <div className="flex justify-between items-center pl-[32px] pr-[33px]">
          <Logo />
          <Nav/>
          <Contact/>

        </div>
      </div>
    </div>
  );
}

export default Header;
