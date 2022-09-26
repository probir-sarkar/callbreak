import { useState } from "react";
import Table from "./components/table/table.component";
import "./App.css";

const initialTableData = (totalTableRows) => {
  const tableData = [];
  for (let i = 0; i <= totalTableRows; i++) {
    tableData.push({
      id: i,
      fields: [0, 0, 0, 0],
    });
  }
  return tableData;
};

function App() {
  const [table, setTable] = useState(initialTableData(10));
  const [sumOfRows, setSumOfRows] = useState([0, 0, 0, 0]);

  const addNewTableRows = () => {
    const newTableRow = {
      id: table.length,
      fields: [0, 0, 0, 0],
    };
    setTable([...table, newTableRow]);
  };

  const updateTableData = (id, index, value) => {
    const updatedTable = table.map((row) => {
      if (row.id === id) {
        row.fields[index] = value;
      }
      return row;
    });
    setTable(updatedTable);

    const sumOfRow = updatedTable.reduce((acc, row) => {
      return acc + Number(row.fields[index]);
    }, 0);
    const updatedSumOfRows = [...sumOfRows];
    updatedSumOfRows[index] = sumOfRow;
    setSumOfRows(updatedSumOfRows);
  };

  return (
    <div className="App">
      <Table
        tableData={table}
        addTotalTableRows={addNewTableRows}
        updateTableData={updateTableData}
        sumOfRows={sumOfRows}
      />
    </div>
  );
}

export default App;
