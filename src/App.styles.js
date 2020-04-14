import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AppContainer;