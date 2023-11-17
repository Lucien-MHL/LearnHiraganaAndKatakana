import styled from 'styled-components'

const S = {
  Button: styled.button`
    background-color: ${({ theme }) => theme.palette.black};
    font-size: ${({ theme }) => theme.size.middle};
    color: ${({ theme }) => theme.palette.mercury};
    padding: 10px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    margin: 15px;

    &:hover {
      outline: 1px solid ${({ theme }) => theme.palette.purple};
    }

    &.selected {
      background-color: ${({ theme }) => theme.palette.blue};
      outline: 0;
    }

    &.selected:hover {
      outline: 0;
      outline: 3px solid ${({ theme }) => theme.palette.mercury};
    }
  `,
}

export default S
