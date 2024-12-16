import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';

function RouterComponent(): JSX.Element {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
