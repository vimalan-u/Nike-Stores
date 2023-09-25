import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Box } from "@chakra-ui/react";

function AdminLayout({ children }) {
  return (
    <Box>
      <AdminSidebar children={children} />
    </Box>
  );
}

export default AdminLayout;
