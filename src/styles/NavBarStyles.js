import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: rgba(33,33,33,0.5);
  z-index: 1000;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  transition: right 0.3s linear;
  height: 100vh;
  width: 50%;
  backdrop-filter: blur(5px);
  padding-top: 3rem;

  a {
    padding: 0.5rem 0.8rem;
    color: #fff;
    text-decoration: none;
    width: 100%;
    font-size: 18px;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    padding-top: 0;
     a {
    width: max-content;
      } 
  }

 
`;