import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Maniac(): JSX.Element {
  const windowHeight = window.innerHeight;
console.log(`Высота окна: ${windowHeight}px`);
  return (
    <div className="flex justify-center bg-maniac-bg bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[214px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="ужасы" title="МАНЬЯК" />
          <DescrQuests
            text="середній"
            time="90"
            count="3-4"
            descr="В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаным, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отстёт60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?"
          />
          <BtnTemp />
        </div>
      </div>
    </div>
  );
}

export default Maniac;
