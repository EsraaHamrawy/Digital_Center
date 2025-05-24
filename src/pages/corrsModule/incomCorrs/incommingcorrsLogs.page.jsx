import { DataGrid } from "@mui/x-data-grid";
import styles from "./incmCorrsLog.module.css";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectIncommingCorrs } from "../../../appState/slices/corrsSlice";
import { Button, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import TableOptionsList from "../../../components/general/tableOptionsList/tableOptionsList";

const IncommingcorrsLogs = () => {
  const rows = useSelector(selectIncommingCorrs);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "reg",
      headerName: "Reg#",
      width: 70,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "corrsTitle",
      headerName: "Correspondence title",
      width: 250,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "corrsType",
      headerName: "Incoming type",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "incomingFrom",
      headerName: "Incoming from",
      width: 250,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "date",
      headerName: "Incoming date",
      width: 300,
      headerClassName: "super-app-theme--header",
    },
  ];

  const actionColumn = [
    {
      field: "actionButton",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <Button
            className="moreOptionsBtn"
            data-id={params.row.id}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MoreHorizIcon />
          </Button>
        );
      },
    },
  ];

  const customLocaleText = {
    noRowsLabel: "No data",
  };
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        className={styles.IncommingcorrsTable}
        componentsProps={{
          noRowsOverlay: { label: "No data" },
        }}
        localeText={customLocaleText}
      />

      <TableOptionsList
        anchorEl={anchorEl}
        open={open}
        setAnchorEl={setAnchorEl}
      >
        <MenuItem className="menuItemList">More Details</MenuItem>
        <MenuItem className="menuItemList" onClick={() => setAnchorEl(null)}>
          item workflow
        </MenuItem>
      </TableOptionsList>
    </Box>
  );
};

export default IncommingcorrsLogs;
