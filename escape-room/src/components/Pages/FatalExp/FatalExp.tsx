import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function FatalExp(): JSX.Element {
  return (
    <div className="flex justify-center bg-fatal-exp bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[170px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests
            text="пригода"
            title="ФАТАЛЬНИЙ ЕКСПЕРИМЕНТ"
            className="ml-[518px]" 
          />
          <DescrQuests
            text="складний"
            time="120"
            count="5-8"
            descr="Ви стоїте на порозі нового наукового відкриття, яке переверне долю людства. Але щось йде не так, і ядерний реактор, який працює на повну потужність, сигналізує про швидку поломку. Чи вдасться вам полагодити його у відведений час і запобігти загибелі людей у ​​цьому фатальному експерименті?"
            className="ml-[518px]"
          />
          <BtnTemp className="ml-[518px]" />
        </div>
      </div>
    </div>
  );
}

export default FatalExp;
