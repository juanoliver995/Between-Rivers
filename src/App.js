import './App.css';
import 'atropos/css';
import Card from './components/Card';
import SocialShare from './components/SocialShare';


function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <Card />
        <SocialShare />
      </div>
    </div>
  );
}

export default App;
