import Greet from "./1.components/1.function/Greet";
import GreetOne from "./1.components/1.function/GreetOne";
import { Named } from "./1.components/1.function/Named";
import { NamedOne } from "./1.components/1.function/NamedOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";

function App() {
  return (
    <div className="container">
      <Greeting id={1} name="Scott" />
      <Greeting id={2} name="Adam"/>
      <Greeting id={3} name="Tuan"/>
      {/* <Hello /> */}
      {/* <Greet />
      <GreetOne />
      <Named />
      <NamedOne />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
