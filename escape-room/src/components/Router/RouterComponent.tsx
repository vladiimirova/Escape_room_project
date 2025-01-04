import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Maniac from '../Pages/Maniac/Maniac';
import OldHouse from '../Pages/OldHouse/OldHouse';
import Ritual from '../Pages/Ritual/Ritual';

function RouterComponent(): JSX.Element {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maniac" element={<Maniac />} />
        <Route path="/old-house" element={<OldHouse />} />
        <Route path="/ritual" element={<Ritual />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
