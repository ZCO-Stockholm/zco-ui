import React, { useState } from "react"
import styled from 'styled-components'
import ModalSide from './ModalSide'

const Container = styled.div`
  position: relative;
`

export default {
  title: "Modal"
}

export const ModalFromRight = () => {
  const [modalActive, setModalActive] = useState(false)

  return <Container>
    <div onClick={ev => setModalActive(!modalActive)}>Toggle Modal</div>
    <ModalSide isActive={modalActive}>Modal Content</ModalSide>
  </Container>
}

export const NestedModal = ({ }) => {
  const [modalActive, setModalActive] = useState(false)
  const [modal2Active, setModal2Active] = useState(false)

  return <Container>
    <div onClick={ev => setModalActive(!modalActive)}>Toggle Modal</div>

    <ModalSide isActive={modalActive}>
      <div onClick={ev => setModal2Active(!modal2Active)}>Toggle Nested Modal</div>

      <ModalSide isActive={modal2Active}>
        Nested Modal Content
      </ModalSide>
    </ModalSide>
  </Container>
}