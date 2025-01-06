import TitleQuests from '../../UI/TitleQuests';
import DescrQuests from '../../UI/DescrQuests';
import BtnTemp from '../../UI/BtnTemp';

function GhostStory(): JSX.Element {
  return (
    <div className="flex justify-center bg-ghost-story bg-cover bg-no-repeat min-h-[896px]">
      <div className="container">
        <div className="pt-[250px] pr-[136px] pl-[150px] pb-[35px]">
          <TitleQuests text="містика" title="СТАРЕ ГОРИЩЕ"  className="ml-[680px]" />
          <DescrQuests
            text="середній"
            time="90"
            count="3-5"
            descr="Ви опинитеся в центрі загадкової історії, де час зупинився, а привиди минулого оживають у кожному куточку. Легенди оживають перед вашими очима, а кожен крок наближає вас до істини, прихованої за завісою темряви. Чи готові ви розкрити секрети, які століттями приховувала ця історія?"
            className="ml-[680px]"
          />
          <BtnTemp  className="ml-[680px]" />
        </div>
      </div>
    </div>
  );
}

export default GhostStory;
