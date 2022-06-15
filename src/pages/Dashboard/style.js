import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.open &&
    css`
      filter: blur(7px);
    `};
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid var(--grey-3);
  align-items: center;
  h1 {
    color: var(--color-primary);
  }
  button {
    width: 100px;
    background-color: var(--grey-3);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid var(--grey-3);
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    padding-left: 20px;
  }
`;

export const Techs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-bottom: 21px;
  button {
    width: 40px;
    background-color: var(--grey-3);
  }
`;

export const List = styled.div`
  width: 780px;
  height: 416px;
  background-color: var(--grey-3);
  padding: 22px;
  flex: 1;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
