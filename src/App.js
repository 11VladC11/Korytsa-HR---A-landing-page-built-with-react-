import Contacts from "./components/contactUs/contactUs.component";
import InTouch from "./components/inTouch/inTouch.component";
import MainSection from "./components/mainSection/mainSection.component";
import Navigation from "./components/navigation/navigation.component";
import Services from "./components/servicesSection/services.component";
import WhyUs from "./components/whyUs/whyUs.component";
function App() {
  return (
    <div className="App">
		<Navigation/>
		<MainSection/>
		<WhyUs/>
		<InTouch/>
		<Services/>
		<Contacts/>
    </div>
  );
}

export default App;
