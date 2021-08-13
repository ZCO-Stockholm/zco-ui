import React from "react";
import { Spacer } from "./Layout";
import Heading from '../Typography/Heading'
import styled from 'styled-components'

const SpacedElement = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
`

const Title = styled<any>(Heading.Medium)`
  display: block;
  margin: 20px 0;
`

export default {
  title: "Layout"
};

export const SpacerLayout = () => {
  return <div>
    <Title>Spaced horizontally</Title>
    <Spacer spaceHorizontal={20}>
      <SpacedElement>
        Element A
        <div>Nested child</div>
      </SpacedElement>
      <SpacedElement>Element B</SpacedElement>
      <SpacedElement>Element C</SpacedElement>
    </Spacer>

    <Title>Spaced horizontally with justification "space-between"</Title>
    <Spacer spaceHorizontal={20} justifyContent="space-between">
      <SpacedElement>
        Element A
        <div>Nested child</div>
      </SpacedElement>
      <SpacedElement>Element B</SpacedElement>
      <SpacedElement>Element C</SpacedElement>
    </Spacer>

    <Title>Spaced vertically</Title>
    <Spacer spaceVertical={20}>
      <SpacedElement>
        Element A
        <div>Nested child</div>
      </SpacedElement>
      <SpacedElement>Element B</SpacedElement>
      <SpacedElement>Element C</SpacedElement>
    </Spacer>

    <Title>Spaced vertically with alignment "flex-end"</Title>
    <Spacer spaceVertical={20} alignItems="flex-end">
      <SpacedElement>
        Element A
        <div>Nested child</div>
      </SpacedElement>
      <SpacedElement>Element B</SpacedElement>
      <SpacedElement>Element C</SpacedElement>
    </Spacer>

  </div>
}