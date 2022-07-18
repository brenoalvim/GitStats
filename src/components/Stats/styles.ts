import { HeaderNav } from './../Header/styles'
import styled from 'styled-components'

export const Div = styled.div`
  @import url('https://rsms.me/inter/inter.css');
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  color: var(--light-color);
  font-family: 'inter', sans-serif;

  .underline {
    width: 100%;
    height: 5px;
    background-color: var(--green-color);
  }

  .hr {
    display: flex;
    width: 100%;
    height: 1px;
  }

  .cardsStats {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .cardsStats img {
    width: 450px;
  }
`
