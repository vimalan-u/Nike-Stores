import { Accordion, useToast } from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";
import { FilterSection } from "./LeftSideFilterComponents";

export const LeftSideFilter = () => {
  const toast = useToast();

  const handleFilterChange = () => {

  };

  const handleFilterApply = (e) => {
    setToast(toast, "Filter Applied Successfully", "success", 1000);
  };

  return (
    <Accordion allowMultiple>
      <FilterSection
        change={handleFilterChange}
        apply={handleFilterApply}
        title={"Gender"}
        item={["Men", "Women", "Kids"]}
      />
      <FilterSection
        change={handleFilterChange}
        apply={handleFilterApply}
        title={"Category"}
        item={["Cloths", "Shoes"]}
      />
      <FilterSection
        change={handleFilterChange}
        apply={handleFilterApply}
        title={"Size"}
        item={["Small", "Medium", "Large"]}
      />
      <FilterSection
        change={handleFilterChange}
        apply={handleFilterApply}
        title={"Colour"}
        item={["Black", "White", "Green", "Red", "Blue"]}
      />
    </Accordion>
  );
};
