import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function HouseInTheWoods(): JSX.Element {
  return (
    <div className="flex justify-center bg-house-in-the-woods bg-cover bg-center bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[259px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="містика" title="ХАТИНА У ЛІСІ"  className="ml-[721px]" />
          <DescrQuests
            text="середній"
            time="90"
            count="4-7"
            descr="Ви з друзями опинилися в покинутій хатині. Яку таємницю вона приховує і як із неї вибратися? На ці питання вам потрібно знайти відповідь, щоб повернутися додому."
            className="ml-[721px]"
          />
          <BtnTemp  className="ml-[721px]" />
        </div>
      </div>
    </div>
  );
}

export default HouseInTheWoods;
