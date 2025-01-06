import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function FinalFrontier(): JSX.Element {
  return (
    <div className="flex justify-center bg-final-frontier bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[210px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="sci-fi" title="КІНЦЕВИЙ КОРДОН"  className="ml-[540px]" />
          <DescrQuests
            text="складний"
            time="120"
            count="4-7"
            descr="Ви вирушите за межі відомого, туди, де закінчується людське розуміння й починається незвідане. Кінцевий кордон чекає на тих, хто готовий кинути виклик всесвіту, розкрити його таємниці й дізнатися правду про те, що лежить за зорями. Чи вистачить вам відваги пройти цей шлях?"
            className="ml-[540px]"
          />
          <BtnTemp  className="ml-[540px]" />
        </div>
      </div>
    </div>
  );
}

export default FinalFrontier;
