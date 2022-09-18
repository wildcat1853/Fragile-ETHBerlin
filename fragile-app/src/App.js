import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Drop from './components/drop/Drop';
import UserProfile from './components/user-profile/UserProfile';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Drop></Drop>
      {/* <UserProfile></UserProfile> */}
    </div>
  );
}

export default App;
