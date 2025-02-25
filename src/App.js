import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Costs from './components/Costs';
import Inclusions from './components/Inclusions';
import Itenary from "./components/Itenary";
import Overview from './components/Overview';
import Payment from './components/Payment';
import Terms from './components/Terms';

function App() {
  return (
    <div className="App">
      <Header/>
      <Overview/>
      <Itenary/>
      <Costs/>
      <Terms/>
      <Payment/>
      <Inclusions/>
      <Footer/>
    </div>
  );
}

export default App;
