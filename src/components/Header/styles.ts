import styled from 'styled-components';


export const Container = styled.header`
  background-color: var(--background-900);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewBookButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: var(--yellow-600);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
      
  transition: filter 0.2s;   
  &:hover {
    filter: brightness(0.9);
  }
`