import './App.css';
import main from './assets/gallery.png'
import p1 from './assets/photos/p1.png'
import p2 from './assets/photos/p2.png'
import p3 from './assets/photos/p3.png'
import p4 from './assets/photos/p4.png'
import p5 from './assets/photos/p5.png'
import p6 from './assets/photos/p6.png'
import p7 from './assets/photos/p7.png'
import p8 from './assets/photos/p8.png'
import p10 from './assets/photos/p10.png'
import p11 from './assets/photos/p11.png'
import p12 from './assets/photos/p12.png'
import p13 from './assets/photos/p13.png'
import p14 from './assets/photos/fixed.png'

function App() {
  return (

      <div className="hero">

        <div className="content">
            <img src={main} alt="main" />
        </div>

        <div className="gallery">

          <div className="row">
            
            <img src={p13} alt="Photo 2" />
            <img src={p4} alt="Photo 4" />
            <img src={p3} alt="Photo 3" />

          </div>

          <div className="row">
            <img src={p5} alt="Photo 2" />
            <img src={p14} alt="Photo 4" />
          </div>

          <div className="row">
            
            <img src={p7} alt="Photo 4" />
            <img src={p1} alt="Photo 1" />
            <img src={p10} alt="Photo 4" />
            
          </div>

          <div className="row">
            <img src={p8} alt="Photo 2" />
            <img src={p6} alt="Photo 4" />
          </div>


          <div className="row">
            <img src={p12} alt="Photo 2" />
            <img src={p2} alt="Photo 2" />
            <img src={p11} alt="Photo 2" />
            
            
          </div>

        </div>

      </div>

  );
}

export default App;
