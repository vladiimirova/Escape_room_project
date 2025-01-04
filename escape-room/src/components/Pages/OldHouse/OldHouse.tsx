import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function OldHouse(): JSX.Element {
  return (
    <div className="flex justify-center bg-old-house bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[256px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests
            text="детектив"
            title="ТАЄМНИЦІ СТАРОГО ОСОБНЯКУ"
            className="ml-[705px]"
          />
          <DescrQuests
            text="легкий"
            time="50"
            count="2-5"
            descr="Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особнякеи увидите все, что скрывают его запутанные коридоры. "
            className="ml-[705px]"
          />
          <BtnTemp  className="ml-[705px]"/>
        </div>
      </div>
    </div>
  );
}

export default OldHouse;
