import React from "react";
import Input from "./Input";
import styled from 'styled-components'

const Container = styled.div`
  > div {
    margin-bottom: 20px;
  }
`

export default {
  title: "Inputs"
}

export const InputText = () => <Input
  label="Input label"
  placeholder="Enter text here"
  required={true}
/>

export const InputNumber = () => <Input
  label="Input label"
  placeholder="Enter number here"
  required={true}
  type="number"
/>