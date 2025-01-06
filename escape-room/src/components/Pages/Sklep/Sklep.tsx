import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Sklep(): JSX.Element {
  return (
    <div className="flex justify-center bg-sklep bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[250px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="жахи" title="СКЛЕП"  className="ml-[659px]" />
          <DescrQuests
            text="складний"
            time="120"
            count="2-5"
            descr="Середньовічний цвинтар таїть у собі багато страшних таємниць. Місцеві жителі кажуть, що у склепі поховано графа вампіра, який ночами виходить на полювання, щоб випити людської крові. Через годину сонце опуститься за обрій, чи встигнете ви вбити вампіра і вибратися зі склепу?"
            className="ml-[659px]"
          />
          <BtnTemp  className="ml-[659px]" />
        </div>
      </div>
    </div>
  );
}

export default Sklep;
