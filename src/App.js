import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner.css/Banner';
import Footer from './Components/Terms.jsx/Terms';
import CancelIcon from '@mui/icons-material/Cancel';
import green from "@material-ui/core/colors/green"
function App() {
  const remove = () => {
    alert("deleted")
  }
  return (
    <div className="App">
      <div className="login text-center">

        <CancelIcon className='icon' fontSize='large' style={{ color: "purple " }}></CancelIcon>
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default App;
