import React from "react";
import { Spacer } from "./Layout";

export default {
  title: "Layout"
};

export const SpacerHorizontal = () => <Spacer spaceHorizontal={20}>
  <div>Element A</div>
  <div>Element B</div>
  <div>Element C</div>
</Spacer>