import { useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import People from './components/People';
import { usePeopleStore, useSettingsStore } from './redux/store';

function App() {
  const { peoples } = usePeopleStore(state => state)
  const { toggleTheme, dark } = useSettingsStore(state => state)

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add("dark");
    } else {
      document.querySelector('body').classList.remove("dark")
    }
  }, [dark])

  return (
    <div >
      <button onClick={toggleTheme}>{'Dark mode'}</button>
      <p>We have {peoples.length} in our DB</p>
      <ul>
        {peoples.map((item, index) => <People key={index} people={item} />)}

      </ul>
      <Input />
    </div>
  );
}

export default App;
