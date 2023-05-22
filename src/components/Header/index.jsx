import styled from "styled-components";

const Container = styled.div`
    background-color: black;
    padding: 5px;
    
`

const Title = styled.h1`
    color: white;
    font-family: 'Pirata One', cursive;
    font-size: 4rem;
    margin-left: 21px;
`



function Header() {
    return (
      <Container>
        <Title>VD</Title>
      </Container>
    );
  }
  
  export default Header;