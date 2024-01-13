import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button</button>
        <Button className="bg-red-500" />
      </div>
    </Container>
  );
}

export default App;
