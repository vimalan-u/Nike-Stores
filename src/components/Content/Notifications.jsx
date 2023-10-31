import React from "react";
import { FormControl, FormLabel, Switch, useToast } from "@chakra-ui/react";
import axios from "axios";
import { setToast } from "../../utils/extraFunctions";
import { useSelector } from "react-redux";
import { removeItem, setItem } from "../../utils/cookiestorage";

function Notifications() {
  const toast = useToast();
  const { token, user } = useSelector((state) => state.auth);
  // console.log(user.notification)

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
      let userdata = JSON.stringify(response.data.user)
      removeItem("user")
      setItem("user", userdata)
      setToast(toast, response.data.user.notification === true ?  "Notification Service started" : "Notification Service Stopped", "success");
    } catch (error) {
      console.error(error);
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
        isChecked={user.notification}
        onChange={updateUsersNotification}
      />
    </FormControl>
  );
}

export default Notifications;
