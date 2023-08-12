import { GridItem, Image } from "@chakra-ui/react";

export const ClothGridBox = ({ source }) => {
    return (
        <GridItem
            cursor={'pointer'}
            borderRadius={'15px'}
            overflow={'hidden'}
        >
            <Image className="imgAnimation" src={source} />
        </GridItem>
    );
};