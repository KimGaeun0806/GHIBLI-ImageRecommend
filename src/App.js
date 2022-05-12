import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Crawling from './Crawling';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.p`
  font-size: 30px;
`;

const Menu = styled.p`
  font-size: 22px;
  padding: 18px 18px;
  margin: 0px 0px;
  cursor: pointer;
`;

function App() {
  const [home, setHome] = useState(true);
  const [whatImg, setWhatImg] = useState('');

  const ClickMove = (e) => {
    setHome(false);
    setWhatImg(e);
  };

  return (
    <>
      {home && (
        <Container>
          <Title>🎠 GHIBLI STUDIO IMAGE RECOMMENDATION 🎠</Title>
          <Menu onClick={() => ClickMove('phone')}>PHONE BACKGROUND</Menu>
          <Menu onClick={() => ClickMove('desktop')}>DESKTOP BACKGROUND</Menu>
          <Menu onClick={() => ClickMove('random')}>RANDOM IMAGE</Menu>
        </Container>
      )}

      {home || <Crawling whatImg={whatImg} setHome={setHome} />}
    </>
  );
}

export default App;
