import styled from "styled-components"

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  width: 100%;
  background-color: #141414;
  height: 10vh;
  img{
    width: 150px;
    height: auto;
    padding-left: 0px;
  }
  @media only screen and (min-width: 768px) {
    padding: 0;
    img {
    padding-left: 10px;
    }
  }

  
`
