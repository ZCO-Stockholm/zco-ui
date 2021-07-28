import React, { useState } from "react"
import styled from 'styled-components'
import ModalSide from './ModalSide'

const Container = styled.div`
  position: relative;
`

export default {
  title: "Modal"
}

export const ModalFromSide = () => {
  const [modalActive, setModalActive] = useState(false)

  return <Container>
    <div onClick={ev => setModalActive(!modalActive)}>Toggle Modal</div>
    <ModalSide isActive={modalActive}>Modal Content</ModalSide>
  </Container>
}