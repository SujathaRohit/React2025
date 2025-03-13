import Greeting from './Greeting';  
import Button from './Button';
import Home from './home';
import ProfileCard from './ProfileCard';
import Me from './assets/Me.jpg';
import ToggleButton from './ToggleButton';
import ClickHandler from './ClickHandler';
import ChangeButtonText from './ChangeButtonText';
import DynamicInlineStyle from './DynamicInlineStyle';
import ButtonTextColor from './ButtonTextColor';
import Counter from './counter';

function App(){
  return(
    <div>
      {/* <Greeting/> 
      <h1> Reusable components in React</h1> 
      <Button label="Submit" />
      <Button label="Cancel" />
      <Button label="Click Me" /> */}
      {/* <ProfileCard 
        name= "Sujatha"
        bio="I am Sujatha. I am a IIIT student. I am looking for Fullstack developer position."
        image={Me}
        
/> */}
{/* <ToggleButton /> */}
{/* <ClickHandler/> */}
{/* <ChangeButtonText /> */}
{/* <DynamicInlineStyle/> */}
        {/* <ButtonTextColor /> */}
        <Counter/>
    </div>
  );
}
export default App;