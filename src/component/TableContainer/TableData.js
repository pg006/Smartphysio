import React, { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";


export const TableData = (props) => {
  const {
    isPagination,
    resTableDataItems,
    columns,
    isSelectable,
    totalRows,
    handlePerRowsChange,
    handlePageChange,
  } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setData(resTableDataItems);
  }, [resTableDataItems]);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);


  return (
    <span className="datatable">
      {/* <DataTableExtensions {...tableDatas}> */}
      {isSelectable ? (
        <DataTable
          title
          columns={columns ? columns : []}
          data={data ? data : []}
          selectableRows
          // contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
          pagination
        />
      ) : isPagination ? (
        <DataTable
          title
          columns={columns ? columns : []}
          data={data ? data : []}
          // contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
        />
      ) : (
        <DataTable
          title
          columns={columns ? columns : []}
          data={data ? data : []}
          // contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
        />
      )}
      {/* </DataTableExtensions> */}
    </span>
  );
};


