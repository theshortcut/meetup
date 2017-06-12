import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX</Heading>
        <List>
          <Appear><ListItem>Syntactic sugar for React.createElement</ListItem></Appear>
          <Appear><ListItem>React must be in scope</ListItem></Appear>
          <Appear><ListItem>Use Dot Notation</ListItem></Appear>
        </List>
    </Slide>
);
