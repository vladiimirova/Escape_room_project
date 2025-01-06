import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Maniac from '../Pages/Maniac/Maniac';
import OldHouse from '../Pages/OldHouse/OldHouse';
import Ritual from '../Pages/Ritual/Ritual';
import FatalExp from '../Pages/FatalExp/FatalExp';
import Sklep from '../Pages/Sklep/Sklep';
import Mars2056 from '../Pages/Mars2056/Mars2056';
import HouseInTheWoods from '../Pages/HouseInTheWoods/HouseInTheWoods';

function RouterComponent(): JSX.Element {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maniac" element={<Maniac />} />
        <Route path="/old-house" element={<OldHouse />} />
        <Route path="/ritual" element={<Ritual />} />
        <Route path="/fatal-experiment" element={<FatalExp />} />
        <Route path="/sklep" element={<Sklep />} />
        <Route path="/mars-2056" element={<Mars2056 />} />
        <Route path="/house-in-the-woods" element={<HouseInTheWoods />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
