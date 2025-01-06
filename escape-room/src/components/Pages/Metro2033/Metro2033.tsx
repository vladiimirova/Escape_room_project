import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Metro2033(): JSX.Element {
  return (
    <div className="flex justify-center bg-metro-2033 bg-cover bg-center bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[221px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="sci-fi" title="МЕТРО 2033"  className="ml-[774px]" />
          <DescrQuests
            text="середній"
            time="90"
            count="6-8"
            descr="Світ поринув у хаус постапокаліпсису після ядерного вибуху. Усі великі міста були стерті з лиця землі і тільки в метро на глибині залишилося життя."
            className="ml-[774px]"
          />
          <BtnTemp  className="ml-[774px]" />
        </div>
      </div>
    </div>
  );
}

export default Metro2033;
