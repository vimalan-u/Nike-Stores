import { Accordion, useToast } from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";
import { FilterSection } from "./LeftSideFilterComponents";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllFilters } from "../../redux/Reducers/productsReducer";

export const LeftSideFilter = () => {
  const url = window.location.href.split("/")[1];
  // console.log("url: ", url);

  let init;
  if (url === "men") {
    init = {
      Gender: { Men: true, Women: false, Kids: false },
      Category: { Cloths: false, Shoes: false },
      Size: { Small: false, Medium: false, Large: false },
      Color: {
        Black: false,
        White: false,
        Green: false,
        Red: false,
        Mix: false,
      },
    };
  } else if (url === "women") {
    init = {
      Gender: { Men: false, Women: true, Kids: false },
      Category: { Cloths: false, Shoes: false },
      Size: { Small: false, Medium: false, Large: false },
      Color: {
        Black: false,
        White: false,
        Green: false,
        Red: false,
        Mix: false,
      },
    };
  } else if (url === "kids") {
    init = {
      Gender: { Men: false, Women: false, Kids: true },
      Category: { Cloths: false, Shoes: false },
      Size: { Small: false, Medium: false, Large: false },
      Color: {
        Black: false,
        White: false,
        Green: false,
        Red: false,
        Mix: false,
      },
    };
  } else {
    init = {
      Gender: { Men: false, Women: false, Kids: false },
      Category: { Cloths: false, Shoes: false },
      Size: { Small: false, Medium: false, Large: false },
      Color: {
        Black: false,
        White: false,
        Green: false,
        Red: false,
        Mix: false,
      },
    };
  }

  // Create a ref to track the initial load
  const initialLoadRef = useRef(true);

  const [manageFilter, setManageFilter] = useState(init);

  useEffect(() => {
    // Check if it's not the initial load
    if (!initialLoadRef.current) {
      filterProducts();
      // console.log(manageFilter);
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

  const handleFilterApply = (e) => {};

  const filterProducts = async () => {
    try {
      const response = await dispatch(setAllFilters(manageFilter)).unwrap();
      setToast(toast, "Filter Applied Successfully", "success", 1000);
    } catch (rejectedValueOrSerializedError) {
      setToast(
        toast,
        rejectedValueOrSerializedError.message
          ? rejectedValueOrSerializedError.message
          : "Products not found! Change the filter or click on the reset button to see products.",
        "info"
      );
      console.error(rejectedValueOrSerializedError);
    }
  };

  return (
    <Accordion allowMultiple>
      {(url === "sale") && (
        <FilterSection
          change={handleFilterChange}
          apply={handleFilterApply}
          title={"Gender"}
          item={["Men", "Women", "Kids"]}
        />
      )}
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
        title={"Color"}
        item={["Black", "White", "Green", "Red", "Blue"]}
      />
    </Accordion>
  );
};
