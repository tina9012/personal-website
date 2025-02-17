import './App.css';
import coverImage from './assets/parents.png'

function App() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Hi 👋 I'm Tina. I'm a software developer 💻 studying Computer Engineering
          at Waterloo. I've interned at Shopify 🛒 and IBM 🌐. Feel free to drop
          me an message 💌, scroll through my travel blog 🗺️, or check out my experiences 🚀.
        </h1>
      </div>
      <div className="content">
        <img src={coverImage} alt="Description"></img>
      </div>
    </div>
  );
}

export default App;
