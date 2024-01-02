import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

const App = () => {
   return (
      <div>
         <div>
            <Navbar />
            <Hero />
            <Products />
         </div>
      </div>
   );
};

export default App;
