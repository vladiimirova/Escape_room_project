import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function OldCeil(): JSX.Element {
  return (
    <div className="flex justify-center bg-old-ceil bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[270px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="детектив" title="СТАРЕ ГОРИЩЕ"  className="ml-[540px]" />
          <DescrQuests
            text="легкий"
            time="60"
            count="2-3"
            descr="Яку таємницю зберігає старе горище? Кожна річ має свій таємний зміст і наближає до вас розкриття головної таємниці."
            className="ml-[540px]"
          />
          <BtnTemp  className="ml-[540px]" />
        </div>
      </div>
    </div>
  );
}

export default OldCeil;
