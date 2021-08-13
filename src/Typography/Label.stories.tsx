import React from "react";
import Label from './Label'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

export default {
  title: "Typography"
};

export const LabelDefault = () => <>
  <Label labelSize="small">Label small</Label>
  <Label labelSize="medium">Label medium</Label>
  <br />
  <Label labelSize="medium" labelColor="secondary">Label with secondary color</Label>
  <Label labelSize="medium" labelColor="accent">Label with accent color</Label>
  <br />
  <Label labelSize="medium" icon="Archive">Label with icon</Label>
  <Label labelSize="medium" icon="Archive" iconAlignment="left">Label with icon left</Label>
  <br />
  <Label labelSize="medium" labelColor="secondary" icon="Archive" withBorder={true}>Label medium with border</Label>
</>