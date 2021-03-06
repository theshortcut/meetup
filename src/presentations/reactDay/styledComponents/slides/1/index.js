import React from "react";
import { Slide, Image, Text } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  logo: require("../../assets/logo3.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["zoom"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Image src={images.logo} width="100%"/>
      <br />
      <br />
      <br />
    <Text>Max Stoiber</Text>
  </Slide>
);
