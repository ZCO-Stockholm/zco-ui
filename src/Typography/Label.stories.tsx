import React from "react";
import Label from './Label'

export default {
  title: "Typography"
};

export const LabelDefault = () => <>
  <Label labelSize="small">Label small</Label>
  <Label labelSize="small" icon="Archive">Label small with icon</Label>
  <Label labelSize="small" icon="Archive" iconAlignment="left">Label small with icon left</Label>
  <Label labelSize="medium">Label medium</Label>
  <Label labelSize="medium" icon="Archive">Label medium with icon</Label>
  <Label labelSize="medium" icon="Archive" iconAlignment="left">Label medium with icon left</Label>
</>