import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Mars2056(): JSX.Element {
  return (
    <div className="flex justify-center bg-mars-2056 bg-cover bg-center bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[250px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="sci-fi" title="МАРС-2056"  className="ml-[659px]" />
          <DescrQuests
            text="легкий"
            time="60"
            count="2-5"
            descr="2055 рік. Ви поїхали на Марс до науково-дослідної експедиції. Мета експедиції – колонізація планети. Ви прибули на місце, розгорнули тимчасовий табір, побудували комплекс життєзабезпечення та розпочали свою роботу. У вас є команда висококваліфікованих фахівців у своїй справі. Але щось йде не так - тепер вам потрібно полетіти з червоної планети якнайшвидше, щоб врятувати своє життя."
            className="ml-[659px]"
          />
          <BtnTemp  className="ml-[659px]" />
        </div>
      </div>
    </div>
  );
}

export default Mars2056;
