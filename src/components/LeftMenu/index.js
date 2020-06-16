import React from 'react';
import {MdMenu} from 'react-icons/md';

import { Container, Nav1, Nav2 } from './styles';

function LeftMenu() {
  return (
    <Container>
      <Nav1>
        <div>
          <MdMenu size={"2.6rem"} />
        </div>
      </Nav1>
      <Nav2>
        <div>
          <MdMenu size={"2.6rem"} />
        </div>
      </Nav2>
    </Container>
  );
}

export default LeftMenu;
