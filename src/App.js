import './App.css';
import coverImage from './assets/parents.png'

function App() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Hi 👋 I'm <span className="bold">Tina.</span> I'm a software developer 💻 studying <span className="highlightWaterloo">Computer Engineering</span> at the 
        University of Waterloo. I've interned at <span className="highlightShopify">Shopify</span> 🛒 and IBM 🌐. Feel free to <span className="underline">drop
        me an message</span> 💌, scroll through my travel blog 🗺️, or check out my experiences 🚀.
        </h1>
      </div>
      <div className="content">
        <img src={coverImage} alt="Description"></img>
      </div>
    </div>
  );
}

export default App;
