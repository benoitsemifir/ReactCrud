import './App.css';
import { Routing } from './components/Routing';
// import { UserProvider } from './context/UserContext';
import { StoreProvider } from './flux/Store';

function App() {
  return (
    <StoreProvider>
      <Routing/>
    </StoreProvider>
    );
}

export default App;
