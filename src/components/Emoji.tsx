import React from "react";
import bullsEye from "../assets/bullsEye.png";
import thumbup from "../assets/thumbup.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [keys: number]: ImageProps } = {
    4: { src: thumbup, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
