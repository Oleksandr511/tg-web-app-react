import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
// import header from './components/Header/Header';
import Header from './components/Header/header';

function App() {

  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
