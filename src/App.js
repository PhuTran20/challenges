import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    //Button
    <div>
      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
      <Button disableShadow>Default</Button>
      <Button disable>Default</Button>
      <Button variant="text" disable>
        Default
      </Button>
      <Button startIcon="local_grocery_store">Default</Button>
      <Button endIcon="local_grocery_store">Default</Button>
      <Button size="sm">Default</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Default</Button>
      <Button color="default">Default</Button>
      <Button color="primary">Default</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}

export default App;
