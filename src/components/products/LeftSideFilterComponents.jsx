import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Stack,
  Text,
} from "@chakra-ui/react";

export const FilterSection = ({ title, item, change, apply }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontSize={["14px", "18px"]}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Stack direction={"column"} gap={"5px"}>
          {item.map((e, i) => (
            <Checkbox
              onChange={(e) => {
                change(e);
              }}
              value={e}
              name={title}
              key={i}
            >
              <Text fontSize={["13px", "16px"]}>{e}</Text>
            </Checkbox>
          ))}
          {/* <Button
            mt={1}
            size="sm"
            color={"white"}
            bgColor={"rgb(0,0,0)"}
            _hover={{
              color: "white",
              bgColor: "rgb(0,0,0)",
            }}
            fontSize={["10px", "13px"]}
            name={title}
            onClick={apply}
          >
            Apply
          </Button> */}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};
