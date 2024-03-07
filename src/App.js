// import logo from './logo.svg';
import './App.css';
import { Banner } from './component/Banner/Banner';
import { Foodstate } from './component/Foodstate/Foodstate';
import { Partner } from './component/Partner/Partner';
import { Restaurant } from './component/Restaurant/Restaurant';
import { Downapp } from './component/Downapp/Downapp';
import { Footer } from './component/Footer/Footer';
function App() {
  return (
    
      <div>
        <Banner/>
      <Foodstate/>
      <Partner/>
      <Restaurant/>
      <Downapp/>
      <Footer/>
    </div>
  );
}

export default App;
