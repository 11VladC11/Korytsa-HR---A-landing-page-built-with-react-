import InTouch from "./components/inTouch/inTouch.component";
import MainSection from "./components/mainSection/mainSection.component";
import Navigation from "./components/navigation/navigation.component";
import WhyUs from "./components/whyUs/whyUs.component";
function App() {
  return (
    <div className="App">
		<Navigation/>
		<MainSection/>
		<WhyUs/>
		<InTouch/>
    </div>
  );
}

export default App;
