import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.png";
import meh from "../assets/meh.png";
import thumsUp from "../assets/thumsUp.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "30px" },
    4: { src: thumsUp, alt: "recommended", boxSize: "30px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
