import styled from 'styled-components'

const S = {
  Layout: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Section: styled.section`
    border: 1px solid red;
    width: 650px;

    @media (min-width: 650) {
      width: 100%;
    }
  `,
}

export default S
