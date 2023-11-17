import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input';
import Googlesearch from './components/google search/Googlesearch';


function App() {
  return (
    <div className="App">
     <div className='header-wrapper'>
      <a>Gmail</a>
      <a>Email</a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
   </a>
     </div>
     <main>
      <div>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      </div>
      <Input/>
      <div className='button-wrapper'>
      <Googlesearch text={"Google Search"}/>
      <Googlesearch text={"I'm Feeling Happy"}/>
      </div>
     </main>
     <footer>
        <div>
            <a>About</a>
            <a>advertising</a>
            <a>Business</a>
            <a>How Search works</a>

        </div>
        <div>
            <a>Privacy</a>
            <a>Terms</a>
            <a>Setting</a>   
        </div>
    </footer>
    </div>
  );
}

export default App;
