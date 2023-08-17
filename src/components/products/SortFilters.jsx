import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setToast } from "../../utils/extraFunctions";
import {
  nameAtoZ,
  nameZtoA,
  ratingHighToLow,
  ratingLowToHigh,
  priceHighToLow,
  priceLowToHigh,
} from "../../redux/Reducers/productsReducer";

export const SortFilters = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = ({ target: { textContent } }) => {
    setToast(toast, `${textContent} applied successfully`, "success");

    switch (textContent) {
      case "Price: Low-High":
        return dispatch(priceLowToHigh());
      case "Price: High-Low":
        return dispatch(priceHighToLow());
      case "Rating: Low-High":
        return dispatch(ratingLowToHigh());
      case "Rating: High-Low":
        return dispatch(ratingHighToLow());
      case "Name: A-Z":
        return dispatch(nameAtoZ());
      case "Name: Z-A":
        return dispatch(nameZtoA());
      default:
        console.log("default");
    }
  };

  return (
    <Box>
      <Menu>
        <MenuButton
          color={"white"}
          bgColor={"rgb(0,0,0)"}
          _hover={{
            color: "white",
            bgColor: "rgb(0,0,0)",
          }}
          size="sm"
          fontSize={["12px", "15px"]}
          as={Button}
          rightIcon={<AiOutlineDown />}
        >
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleChange}>Price: Low-High</MenuItem>
          <MenuItem onClick={handleChange}>Price: High-Low</MenuItem>
          <MenuItem onClick={handleChange}>Rating: Low-High</MenuItem>
          <MenuItem onClick={handleChange}>Rating: High-Low</MenuItem>
          <MenuItem onClick={handleChange}>Name: A-Z</MenuItem>
          <MenuItem onClick={handleChange}>Name: Z-A</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
