import { Accordion, useToast } from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";
import { FilterSection } from "./LeftSideFilterComponents";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllFilters } from "../../redux/Reducers/productsReducer";

export const LeftSideFilter = () => {
  const init = {
    Gender: { Men: false, Women: false, Kids: false },
    Category: { Cloths: false, Shoes: false },
    Size: { Small: false, Medium: false, Large: false },
    Colour: {
      Black: false,
      White: false,
      Green: false,
      Red: false,
      Mix: false,
    },
  };

  // Create a ref to track the initial load
  const initialLoadRef = useRef(true);

  const [manageFilter, setManageFilter] = useState(init);

  useEffect(() => {
    // Check if it's not the initial load
    if (!initialLoadRef.current) {
      dispatch(setAllFilters(manageFilter));
      setToast(toast, "Filter Applied Successfully", "success", 1000);
      console.log(manageFilter);
    } else {
      // Set the initial load to false after the first render
      initialLoadRef.current = false;
    }
  }, [manageFilter]);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleFilterChange = ({ target: { name, value, checked } }) => {
    setManageFilter({
      ...manageFilter,
      [name]: {
        ...manageFilter[name],
        [value]: checked,
      },
    });

  };

  const handleFilterApply = (e) => {
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
