import { GridItem, Image } from "@chakra-ui/react";

export const ClothGridBox = ({ source, onClick }) => {
  return (
    <GridItem
      cursor={"pointer"}
      borderRadius={"15px"}
      overflow={"hidden"}
      onClick={onClick}
    >
      <Image className="imgAnimation" src={source} />
    </GridItem>
  );
};
