import {
  Box,
  Text,
  VStack,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const list = [
  {
    id: 1,
    name: "Total Orders Placed",
    value: 32,
    color: "yellow",
  },
  {
    id: 2,
    name: "Ongoing Deliveries",
    value: 6,
    color: "green",
  },
  {
    id: 3,
    name: "Products Favorited",
    value: 10,
    color: "cadet",
  },
];

function Data() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      <HStack
        w="full"
        py={3}
        px={5}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderColor="brand.light"
      >
        <Text fontWeight="bold">
          {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
        <div className="checkbox-wrapper-25">
          <input
            type="checkbox"
            checked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </div>
      </HStack>
      {list.map((item) => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color={useColorModeValue("brand.dark", "brand.light")}>
            {item.name}
          </Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default Data;
