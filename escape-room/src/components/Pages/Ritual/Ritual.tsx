import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function Ritual(): JSX.Element {
  return (
    <div className="flex justify-center bg-ritual bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[283px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="містика" title="РИТУАЛ" className="ml-[762px]" />
          <DescrQuests
            text="складний"
            time="120"
            count="3-5"
            descr="Важке повітря пригнічує, в ночі ви опиняєтеся замкненими в сирому приміщенні разом з іншими жертвами, які нічого не розуміють. Крізь щілину у двері ви бачите, як хтось у капюшоні готує майданчик як для проведення містичного обряду. Чи вдасться вам вибратися, поки ви не станете жертвою ритуалу? "
            className="ml-[762px]"
          />
          <BtnTemp className="ml-[762px]" />
        </div>
      </div>
    </div>
  );
}

export default Ritual;
