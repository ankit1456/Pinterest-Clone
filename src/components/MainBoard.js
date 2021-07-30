import styled from "styled-components";
import Pin from "./Pin";
import "./MainBoard.css";
const MainBoard = ({ pins }) => {
  return (
    <Wrapper>
      <Container className='mainboard__container'>
        {pins.map((pin) => (
          <Pin key={pin.id} urls={pin.urls} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default MainBoard;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 1.5rem;
`;
const Container = styled.div`
  background-color: #fff;
  column-gap: 0.2rem;
  margin: 0 auto;
  height: 100%;
`;
