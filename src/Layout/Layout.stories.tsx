import React from "react";
import { Spacer, Justify } from "./Layout";

export default {
  title: "Layout"
};

export const SpacerHorizontal = () => <Spacer spaceHorizontal={20}>
  <div>Element A</div>
  <div>Element B</div>
  <div>Element C</div>
</Spacer>

export const JustifySpaceBetween = () => <Justify justifyContent="space-between">
  <div>Element A</div>
  <div>Element B</div>
</Justify>