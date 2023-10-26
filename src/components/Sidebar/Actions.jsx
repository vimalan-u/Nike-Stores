import { useEffect, useRef } from "react";
import {
  Button,
  useClipboard,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";

export default function Actions({ onProfilePicSubmit }) {
  const value = "https://apple.com/cook";
  const { hasCopied, onCopy } = useClipboard(value);

  const profileUrl = useRef(null);

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  });


  return (
    <VStack py={8} px={5} spacing={3}>
      <Button w="full" variant="outline" onClick={onProfilePicSubmit}>
        Update Profile
      </Button>
    </VStack>
  );
}
