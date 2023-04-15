import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import OpenaiPrompt from './components/OpenaiPrompt';

function App() {
  return (
    <div>
      <Logo alt="logo"/>
      <h1>Welcome to my OpenAI app!</h1>
      <OpenaiPrompt />
    </div>
  );
}

export default App;
