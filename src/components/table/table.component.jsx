const Table = ({
  tableData,
  addTotalTableRows,
  updateTableData,
  sumOfRows,
}) => {
  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Player 3</th>
            <th>Player 4</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, fields }) => (
            <tr key={id}>
              {fields.map((field, index) => (
                <td key={`${id}.${index}`}>
                  <input
                    type="number"
                    value={field}
                    onChange={(e) => updateTableData(id, index, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {sumOfRows.map((sum, index) => (
              <td key={index}>{sum}</td>
            ))}
          </tr>
        </tfoot>
      </table>
      <button onClick={addTotalTableRows}>Add one Row</button>
    </div>
  );
};
export default Table;
