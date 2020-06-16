import React from 'react';

import { Container, Nav1, Nav2 } from './styles';

function CenterMenu() {
  return (
    <Container>
      <Nav1>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </Nav1>
      <Nav2>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </Nav2>
    </Container>
  );
}

export default CenterMenu;
