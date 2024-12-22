
import HellicottHeader from './components/hellicottHeader';
import DinoDesigner from './projects/DinoDesigner';
import RandomColour from './projects/randomColour';
import NameGenerator from './projects/SprintNameGenerator/nameGenerator';
import MorseCodeTranslator from './projects/morseCode';
import TwisterSpinner from './projects/Twister/TwisterSpinner';

function App() {
  return (
    <div>
      <HellicottHeader />
      <TwisterSpinner />
      <NameGenerator />
      <RandomColour />
      <DinoDesigner />
      <MorseCodeTranslator />
    </div>
  );
}

export default App;
