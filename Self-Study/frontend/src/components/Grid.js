import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shaddow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

const Grid = ({ usersList, setUsers, setOnEdit }) => {
    const handdleEdit = (item) => {
        setOnEdit(item);
    }

    const handdleDelete = async (id) => {
        await axios
            .delete("http://localhost:8880/" + id)
            .then(({data}) => {
                const newArray = usersList.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEdit(null);
    };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {usersList.map((item) => (
          <Tr id={item.id}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%">{item.fone}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handdleEdit(item)}/>
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handdleDelete(item.id)}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
