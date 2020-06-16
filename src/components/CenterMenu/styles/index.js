import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #eee;
  width: 40%;
  margin: 0.5rem;
  height: 80vh;
`;

export const Nav1 = styled.ul`
  margin: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;

  li {
    margin: 10px;
    a {
      text-decoration: none;
      color: #eee;
    }
  }
`;

export const Nav2 = styled.ul`
  margin: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;

  li {
    margin: 10px;
    a {
      text-decoration: none;
      color: #eee;
    }
  }
`;
