import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto 0;

  p {
    margin-top: 2rem;
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

    }

    tr {
      border-radius: 0.25rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;

      background: var(--background-700);
      color: var(--text-body);
      font-weight: 500;
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    @media (max-width: 630px) {
      padding: 0.5rem 0.5rem;
    }
    }
  }

 
`;



export const Title = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  background-color: var(--background-700);
  padding: 2.5rem 1rem;
  margin-top: -4rem;
  border-radius: 0.25rem;

  h1{
    text-align: center;
  }
`