import styled from "styled-components";
import "./app.css";
import Home from "./pages/Home";

const Container = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
