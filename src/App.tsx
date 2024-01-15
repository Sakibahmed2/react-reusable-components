import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>This is modal title</h2>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is modal content</p>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
