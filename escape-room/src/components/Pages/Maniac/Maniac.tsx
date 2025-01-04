import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Maniac(): JSX.Element {
  return (
    <div className="flex justify-center bg-maniac-bg bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[214px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="жахи" title="МАНЬЯК" className="ml-[540px]" />
          <DescrQuests
            text="середній"
            time="90"
            count="3-4"
            descr="У кімнаті з приглушеним світлом кілька людей, незнайомих один з одним, приходять до тями. Ніхто не пам'ятає, що сталося минулого вечора. Руки та ноги пов'язані, але одному з вас вдалося звільнитися. На стіні висить таймер, що лякає, і запущений отсте60 хвилин. Чи зможете ви розібратися в стресовій ситуації, допомогти іншим, розібратися, що сталося і вибратися з кімнати?"
            className="ml-[540px]"
          />
          <BtnTemp className='ml-[540px]'/>
        </div>
      </div>
    </div>
  );
}

export default Maniac;
