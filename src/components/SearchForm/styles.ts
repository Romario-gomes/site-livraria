import styled from "styled-components";

export const SearchFormContainer = styled.form`
display: flex;
gap: 0.5rem;

input {
  flex: 1;
  border-radius: 6px;
  border: 0;
  background-color: var(--background-900);
  color: var(--text-body);
  padding: 1rem;
  &::placeholder {
    color: var(--background-700)
  }
}

button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid var(--yellow-600);
    color: var(--yellow-600);
    font-weight: bold;
    border-radius: 6px;
    
    &:hover {
      background: var(--yellow-600);
      border-color: var(--yellow-600);
      color: #FFF;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s
    }
  }
`;