import styled from 'styled-components'

type ModalSide = 'right' | 'left'

interface ModalSideContainerProps {
  modalSide?: ModalSide
  isActive: boolean
  modalWidth?: string
}

const ModalSideContainer = styled.div<ModalSideContainerProps>`
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

interface ModalSideProps extends ModalSideContainerProps {
  children: React.ReactNode
}

const ModalSide = ({
  modalSide = 'right',
  isActive = false,
  modalWidth = '80%',
  children,
}: ModalSideProps) => {
  return <ModalSideContainer
    modalSide={modalSide}
    modalWidth={modalWidth}
    isActive={isActive}
  >
    <Inner>
      {children}
    </Inner>
  </ModalSideContainer>
}

export default ModalSide