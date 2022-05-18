import styled from 'styled-components'
import media from '../styles/media'

const Container = styled.div`
  display: flex;
  height: 100%;
  ${media.smallMax} {
    flex-wrap: wrap;
  }
`

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.bg};
  border-right: ${({ theme }) => theme.borders.regular};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100px;
  z-index: 100;

  ${media.smallMax} {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: ${({ theme }) => theme.borders.regular};
    position: static;
  }
`

const Main = styled.main`
  flex-grow: 1;
  ${({ theme }) => theme.padding}
  margin-left: 100px;
  max-width: 100%;
  min-height: 100vh;

  ${media.smallMax} {
    margin: 0;
  }
`

const PageLayout = {
  Container,
  Sidebar,
  Main
}

export default PageLayout