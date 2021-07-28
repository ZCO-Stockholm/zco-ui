import React from "react";
import Message from "./Message";
import styled from 'styled-components'

const Container = styled.div`
  > div {
    margin-bottom: 20px;
  }
`

export default {
  title: "Message"
}

export const MessageDefault = () => <Container>
  <Message>Message</Message>
  <Message icon="Archive">Message with custom icon</Message>
  <Message icon="none">Message with no icon</Message>
</Container>

export const MessageSuccess = () => <Container>
  <Message messageType="success">Message</Message>
  <Message messageType="success" icon="Archive">Message with custom icon</Message>
  <Message messageType="success" icon="none">Message with no icon</Message>
</Container>

export const MessageError = () => <Container>
  <Message messageType="error">Message</Message>
  <Message messageType="error" icon="Archive">Message with custom icon</Message>
  <Message messageType="error" icon="none">Message with no icon</Message>
</Container>