import MainTitle from './MainComponents/MainTitle';
import MainMenu from './MainComponents/MainMenu';
import QuestsCards from './MainComponents/QuestsCards';

function Main(): JSX.Element {
  return (
    <div className="flex justify-center bg-custom-gradient pt-[122px]">
      <div className="container">
        <div className="">
          <MainTitle />
          <MainMenu/>
          <QuestsCards/>
        </div>
      </div>
    </div>
  );
}

export default Main;
