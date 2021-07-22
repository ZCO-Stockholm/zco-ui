import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  ${({ modalSide, isActive, modalWidth }) => {
    return `${modalSide}: ${isActive ? 0 : `-${modalWidth}`};`
  }}
  height: 100vh;
  width: ${({ modalWidth }) => modalWidth};
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  transition: ${({ modalSide }) => `${modalSide} 0.3s ease`};
  will-change: ${({ modalSide}) => modalSide};
  overflow: scroll;
`

const Inner = styled.div`
  position: relative;
  height: 100%;
`

type ModalSide = 'right' | 'left'

type ModalSideProps = {
  modalSide?: ModalSide
  isActive: boolean
  setIsActive: () => {}
  modalWidth?: string
}

const ModalSide = ({
  modalSide = 'right',
  isActive = false,
  setIsActive = () => {},
  modalWidth = '80%',
  children,
}) => {
  return <Container modalSide={modalSide} modalWidth={modalWidth} isActive={isActive}>
    <Inner>
      {children}
    </Inner>
  </Container>
}

export default ModalSide