import MainTitle from './MainComponents/MainTitle';
import MainMenu from './MainComponents/MainMenu';
import QuestsCards from './MainComponents/QuestsCards';

function Main(): JSX.Element {
  return (
    <div className="flex justify-center bg-custom-gradient ">
      <div className="container">
        <div className="pt-[122px] pr-[136px] pl-[150px] pb-[48px]">
          <MainTitle />
          <MainMenu/>
          <QuestsCards/>
        </div>
      </div>
    </div>
  );
}

export default Main;
