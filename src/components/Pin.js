import styled from "styled-components";

const Pin = ({ urls }) => {
  return (
    <Wrapper>
      <Container>
        <img src={urls?.full} />
      </Container>
    </Wrapper>
  );
};

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 0.8rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 23.2rem;

  @media (max-width: 535px) {
    width: 21rem;
  }
  @media (max-width: 350px) {
    width: 17rem;
  }

  img {
    display: flex;
    border-radius: 16px;
    cursor: zoom-in;
    width: 100%;
    object-fit: contain;
  }
`;
