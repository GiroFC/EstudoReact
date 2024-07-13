import styled from 'styled-components';


export const ButtonContainer = styled.button<{disabled: boolean}>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#81259D')};
  color: ${({ disabled }) => (disabled ? '#a9a9a9' : '#FFF')};
  border-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#81259D')};
`