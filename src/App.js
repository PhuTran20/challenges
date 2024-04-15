import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

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

      <Input control></Input>
      <Input control error></Input>
      <Input control disable></Input>
      <Input control helperText="Some interesting text" error></Input>
      <Input control startIcon></Input>
      <Input control endIcon></Input>
    </div>
  );
}

export default App;
