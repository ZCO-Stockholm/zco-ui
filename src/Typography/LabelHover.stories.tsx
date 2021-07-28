import React from "react";
import LabelHover from './LabelHover'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 175px;
  background: #eee;
  padding: 10px 20px;
`

export default {
  title: "Typography"
};

export const LabelHoverOffset = () => <Container>
  <div>Container with responsive position</div>
  <LabelHover isVisible={true}>Label title</LabelHover>
</Container>