import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(taskTitle, deadline, daysLeft) {
  return { taskTitle, deadline, daysLeft };
}

const rows = [
  createData("Buy milk", "01/01/23", 100),
  createData("Buy eggs", "01/02/23", 20),
  createData("Buy chocolate", "01/03/23", 10),
  createData("Buy beans", "01/04/23", 30),
  createData("Buy toast", "01/05/23", 40),
];

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Reminders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="left">Deadline</TableCell>
              <TableCell align="left">Days Left</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.taskTitle}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.taskTitle}
                </TableCell>
                <TableCell align="left">{row.deadline}</TableCell>
                <TableCell align="left">{row.daysLeft}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
