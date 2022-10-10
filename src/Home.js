import './Home.css';
import organic from './Organic.jpg';

function Home() {

  return (
    
    <div className='home'>
      <div className='image'>
    <img src={organic} alt=""></img>
      </div>
    <div className='content'>
      <p>Health is Wealth </p>
  <p> Eat Natural Eat Organic </p>
    </div>
  </div>
  );
}

export default Home;











/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/