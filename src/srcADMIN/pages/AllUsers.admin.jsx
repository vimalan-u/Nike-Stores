import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Error } from "../../components/loading/Error";
import { Loading } from "../../components/loading/Loading";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      let response = await axios("/admin/getusers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  return (
    <TableContainer>
      {loading && <Loading />} {error && <Error />}
      {!loading && !error && (
        <Table
          variant="striped"
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Email</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Is Admin</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.email}</Td>
                <Td>{user.firstName ? user.firstName : "NA"}</Td>
                <Td>{user.lastName ? user.lastName : "NA"}</Td>
                <Td>{user.isAdmin ? "Yes" : "No"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
}

export default AllUsers;
