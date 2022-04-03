import styled from 'styled-components';
import DigitarMensagem from './components/DigitarMensagem/DigitarMensagem';

const BoxWhyzap = styled.section`
  border: 1px solid black;
  height: 700px;
  width: 70%;
  max-width: 1280px;
  margin: 20px auto;
  background-color: #e0d7cd;
`;

function App() {
  return (
    <div>
      <BoxWhyzap>
        <DigitarMensagem />
      </BoxWhyzap>
    </div>
  );
}

export default App;
