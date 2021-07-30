import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.bg};
  border-right: ${({ theme }) => theme.borders.regular};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  flex-grow: 1;
  padding: 50px;
`

const PageLayout = {
  Container,
  Sidebar,
  Main
}

export default PageLayout