import React from "react";
import { Container } from "./reusable/container";
import image from "./34d1vu.jpg";
import { Button } from "./reusable/button";
import { Text } from "./reusable/text";

const Conclusion = () => {
  const [display, setDisplay] = React.useState(false);
  return (
    <Container flexDirection="column">
      <Text>Let's migrate to React 16.8</Text>
      <Button
        style={{ width: 1, height: 1 }}
        onClick={() => setDisplay(!display)}
      />
      <Text fontSize={20}>
        Code available at{" "}
        <a href="https://github.com/mcrowder65/react-hooks-a">
          https://github.com/mcrowder65/react-hooks-a
        </a>
      </Text>
      {display ? (
        <img src={image} alt="funny meme" title="made at imgflip.com" />
      ) : null}
    </Container>
  );
};

export default Conclusion;
