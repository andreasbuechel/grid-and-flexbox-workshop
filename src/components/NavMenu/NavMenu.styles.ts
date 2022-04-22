import styled from "styled-components";

export const NavRoot = styled.div`
  background-color: rgb(18, 131, 218);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 100;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  font-family: "Rubik Beastly", cursive;
  font-size: 20px;
  flex: 1;
  display: flex;
  text-align: left;
`;

export const ButtonCluster = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
