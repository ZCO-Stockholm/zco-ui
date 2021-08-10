import React from "react";
import TextArea from "./TextArea";

export default {
  title: "Inputs"
}

export const TextAreaDefault = () => <TextArea
  label="Input label"
  placeholder="Enter text here"
  required={true}
  value="Lorem ipsum dolor sit amet"
/>