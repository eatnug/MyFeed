import React, { ReactElement } from 'react';
import styled from 'styled-components';

export default function (): ReactElement {
  return <Sidebar />;
}

const Sidebar = styled.div`
  flex: 1;
  border: 1px solid;
`;
