import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, required
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional theme CSS

const GridExample = ({ data }) => {
  const columnDefs = useMemo(
    () => [
      {
        field: "date",
        sort: "desc",
        sortable: true,
        filter: "agDateColumnFilter",
        // Adding a value formatter for the date column
        valueFormatter: (params) => {
          const dateObj = new Date(params.value);
          return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(dateObj);
        },
      },
      { field: "description" },
      { field: "amount", filter: "agNumberColumnFilter" },
      { field: "category" },
      { field: "subcategory" },
      { field: "type" }, // Make sure the 'type' field is included if not already
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 150,
      filter: true,
      resizable: true,
      floatingFilter: true,
    }),
    []
  );

  const rowData = useMemo(() => data, [data]);

  // Define getRowStyle function
  const getRowStyle = (params) => {
    if (params.data.type === "INCOME") {
      return { backgroundColor: "#e6ffed" }; // Light green background for INCOME
    } else if (params.data.type === "EXPENSE") {
      return { backgroundColor: "#ffe6e6" }; // Light red background for EXPENSE
    }
    return null; // Default style for other rows
  };

  return (
    <div className="ag-theme-quartz" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={10}
        getRowStyle={getRowStyle} // Apply the row style function
      />
    </div>
  );
};

export default GridExample;
