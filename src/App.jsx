
import Me from './assets/Me.jpg';
import FetchUseEffectErrorHandling from './FetchUseEffectErrorHandling';
import { ThemeProvider } from './ThemeContext';
import Home from './Home';

function App(){
  
  return(
   <ThemeProvider>
    <Home />
   </ThemeProvider>
  );
  
}
export default App;