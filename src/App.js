import './App.css';
import coverImage from './assets/mtl.jpg'

function App() {
  return (
    <div className="hero">


      <div className="content">
        <h1>Hi 👋 I'm <span className="bold">Tina Xia. </span> I'm a software developer studying <span className="highlightWaterloo">Computer Engineering</span> at the 
        University of Waterloo 💻. I've interned at <span className="shopify">Shopify and IBM.</span> Feel free to <span className="underline">drop
        me a message</span> 💌, scroll through my travel blog, or check out <span className="ibm">my experiences.</span>
        </h1>
      </div>
      <div className="content">
        <img src={coverImage} alt="Description"></img>
      </div>

    </div>
  );
}

export default App;
