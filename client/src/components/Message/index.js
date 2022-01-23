import React from "react";
import { Container } from "./style";

const Message = ({ message }) => {
  return (
    <Container>
      <h2>{message}</h2>
    </Container>
  );
};

export default Message;
