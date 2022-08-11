import Greet from "./1.components/1.function/Greet";
import GreetOne from "./1.components/1.function/GreetOne";
import { Named } from "./1.components/1.function/Named";
import { NamedOne } from "./1.components/1.function/NamedOne";
import Welcome from "./1.components/2.class/Welcome";
import LifeCycleA from "./10.life-cycle-methods/LifeCycleA";
import CityAPI from "./11.ajax-calls/CityAPI";
import PostAPI from "./11.ajax-calls/PostAPI";
import ProductApi from "./11.ajax-calls/ProductApi";
import ProductStoreApi from "./11.ajax-calls/ProductStoreApi";
import UserApi from "./11.ajax-calls/UserApi";
import UserApiOne from "./11.ajax-calls/UserApiOne";
// import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import Counter from "./4.state/Counter";
import CounterOne from "./4.state/CounterOne";
import Message from "./4.state/Message";
import WelcomeOne from "./4.state/WelcomeOne";
import ClassClick from "./5.event-handling/ClassClick";
import EventBinding from "./5.event-handling/EventBinding";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import Stylesheet from "./8.styling/Stylesheet";
import Form from "./9.form-data/Form";
import FormOne from "./9.form-data/FormOne";

function App() {
  function getMessage() {
    return "Welcome to React Props"
  }
  return (
    <div className="container">
      <ProductStoreApi />
      {/* <ProductApi /> */}
      {/* <UserApiOne /> */}
      {/* <UserApi /> */}
      {/* <CityAPI /> */}
      {/* <PostAPI /> */}
      {/* <LifeCycleA /> */}
      {/* <FormOne /> */}
      {/* <Form /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBinding /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <WelcomeOne /> */}
      {/* <Message /> */}
      {/* <CounterOne /> */}
      {/* <Counter /> */}
      {/* <Greeting id={1}
        name="Scott"
        isAdmin={true}
        department={null}
        grade={undefined}
        address={{ city: "Boston", country: "USA" }}
        getMessage={getMessage}
        getMessageOne={function () { return "You can use anonymous functions" }}
        getMessageTwo={(function () { return "This is IIF" })()}
        getMessageThree={() => "This is fat arrow function"}
        subjects={["Maths", "Physics", "Chemistry"]}
      >
        <p style={{display: "inline"}}>I am the child component</p>
      </Greeting>
      <br /><br />
      <GreetingOne id={1}
        name="Scott"
        isAdmin={true}
        department={null}
        grade={undefined}
        address={{ city: "Boston", country: "USA" }}
        getMessage={getMessage}
        getMessageOne={function () { return "You can use anonymous functions" }}
        getMessageTwo={(function () { return "This is IIF" })()}
        getMessageThree={() => "This is fat arrow function"}
        subjects={["Maths", "Physics", "Chemistry"]}
      >
         <p style={{display: "inline"}}>I am the child component</p>
      </GreetingOne> */}
      {/* <Greeting id={2} name="Adam"/>
      <Greeting id={3} name="Tuan"/> */}
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
