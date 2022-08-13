import './App.css';
import 'atropos/css';
import Atropos from 'atropos/react';



function App() {
  return (
    <div className="App">
      <div className='flip-container'>
        <Atropos duration={1000} highlight={true} shadow={false}>
          <div className='card-flip'>
            <div className='marca-de-agua'><h1>Between Rivers</h1></div>
            <div className='dorso'>
              <div className='container'>
                <div className='container-card'>
                  <div className='card'>
                    <div className='header-card' data-atropos-offset="3">
                      <div className='header-name'>
                        <div className='logo'></div>
                        <p>Marianelo</p>
                      </div>
                      <div className='header-ticket-number'>
                        <p>TICKET NUMBER</p>
                        <p><span># </span>0000</p>
                      </div>
                    </div>
                    <div className='main-card'>
                      <h1 data-atropos-offset="10" data-atropos-opacity="0.9;1">Marianelo</h1>
                      <div data-atropos-offset="-2">
                        <p data-atropos-offset="5">OCTUBRE 01 • GUALEGUAYCHU • 01AM</p>
                      </div>
                    </div>
                    <div className='footer-card' data-atropos-offset="8">
                      <h3>Invitado Especial</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='frente'>
              <div className='container'>
                <div className='container-card' data-atropos-offset="0">
                  <div className='card-frente'>
                    <div className='main-card-frente'>
                      <h1 data-atropos-offset="4">#Birthday Gero</h1>
                      <div data-atropos-offset="-2">
                        <p data-atropos-offset="-3">Invitacion Especial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Atropos>
      </div>
    </div>
  );
}

export default App;
