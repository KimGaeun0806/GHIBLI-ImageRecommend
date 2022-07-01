import { useEffect, useState } from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.p`
  font-size: 15px;
  margin-bottom: 50px;
`;

const Crawling = ({ whatImg, setHome }) => {
  let queryString = '';
  switch (whatImg) {
    case 'phone':
      queryString = '지브리 폰 배경화면';
      break;
    case 'desktop':
      queryString = '지브리 노트북 배경화면';
      break;
    default:
      queryString = '지브리 사진';
  }

  const [ghibliImage, setGhibliImage] = useState(null);
  const startInteger = Math.floor(Math.random() * 49) + 1;
  const [displayInteger, setDisplayInteger] = useState(
    Math.floor(Math.random() * 99) + 1
  );

  useEffect(() => {
    const getImage = async () => {
      const ID_KEY = process.env.REACT_APP_ID_KEY;
      const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

      try {
        const response = await axios.get(
          `/v1/search/image?query=${queryString}&display=100&start=${startInteger}`,
          {
            headers: {
              'X-Naver-Client-Id': ID_KEY,
              'X-Naver-Client-Secret': SECRET_KEY,
            },
          }
        );
        setGhibliImage(response.data.items[displayInteger].link);
      } catch (e) {
        console.error(e);
      }
    };
    getImage();
  }, [displayInteger]);

  return (
    <Container>
      <Title>GHIBLI STUDIO IMAGE RECOMMENDATION</Title>
      <img
        src={ghibliImage}
        alt="이미지"
        height="600"
        style={{ marginBottom: '50px' }}
      />
      <img
        src="img/re.png"
        alt="새로고침"
        height="45"
        onClick={() => setDisplayInteger(Math.floor(Math.random() * 99) + 1)}
        style={{ cursor: 'pointer' }}
      />
      <p
        style={{ marginTop: '20px', fontSize: '18px', cursor: 'pointer' }}
        onClick={() => setHome(true)}
      >
        back
      </p>
    </Container>
  );
};

export default Crawling;
