import RouterComponent from './components/Router/RouterComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <main>
          <RouterComponent />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
