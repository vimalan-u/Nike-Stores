import React, { useState } from "react";
import { FormControl, FormLabel, Switch, useToast } from "@chakra-ui/react";
import axios from "axios";
import { setToast } from "../../utils/extraFunctions";
import { useSelector } from "react-redux";

function Notifications() {
  const toast = useToast();
  const { token, user } = useSelector((state) => state.auth);
  // const [checked, setChecked] = useState(false);

  const updateUsersNotification = async () => {
    try {
      const response = await axios.post(
        "/user/updateusernotificationdetails",
        { id: user.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setToast(toast, "Notification service started", "success");
      setChecked(true);
    } catch (error) {
      console.error(error);
      setChecked(false);
      setToast(
        toast,
        error.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        htmlFor="notificationEmails"
        mb={0}
        cursor="pointer"
        userSelect="none"
      >
        Receive notification emails
      </FormLabel>
      <Switch
        id="notificationEmails"
      />
      {/* <Switch
        id="notificationEmails"
        isChecked={checked}
        onChange={updateUsersNotification}
      /> */}
    </FormControl>
  );
}

export default Notifications;
