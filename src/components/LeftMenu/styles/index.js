import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #eee;
  width: 25%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Nav1 = styled.ul`
  width: 90%;
  height: 48%;
  margin: 1rem;
  list-style: none;
  border: 1px solid #eee;

  div {
    cursor: pointer;
    /* margin: 0.5rem; */
    svg {
      border-bottom-right-radius: 50%;
      border-top-right-radius: 50%;
      background: #eee;
      padding: 3px;
      color: #333;
    }
  }

`;

export const Nav2 = styled.ul`
  width: 90%;
  height: 48%;
  margin: 1rem;
  list-style: none;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    cursor: pointer;
    margin: 0.5rem;
    svg {
      background: #eee;
      border-radius: 100%;
      color: #006699;
    }
  }
`;
