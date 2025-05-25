import { useDispatch, useSelector } from "react-redux";
import {
  approvedRequests,
  rejectedRequests,
  selectPendingRequests,
} from "../../../appState/slices/purchaseSlice";
import { Box, Button, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableOptionsList from "../../../components/general/tableOptionsList/tableOptionsList";

const ManagerTask = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const rows = useSelector(selectPendingRequests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const approvedRequest = (rowId) => {
    dispatch(approvedRequests({ rowId }));
  };

  const rejectedRequest = (rowId) => {
    dispatch(rejectedRequests({ rowId }));
  };
  const goToRequestDetails = (id) => {
    const currentPath = location.pathname;
    navigate(
      `/purchase/requestDetails/${id}?from=${encodeURIComponent(currentPath)}`
    );
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "requestTitle",
      headerName: "request Title",
      width: 250,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "requestDate",
      headerName: "request Date",
      width: 200,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "requestBy",
      headerName: "request By",
      width: 200,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "itemsQuantity",
      headerName: "Item",
      width: 70,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 300,
      headerClassName: "super-app-theme--header",
    },
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
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        localeText={customLocaleText}
      />

      <TableOptionsList
        anchorEl={anchorEl}
        open={open}
        setAnchorEl={setAnchorEl}
      >
        <MenuItem
          className="menuItemList"
          onClick={() => goToRequestDetails(anchorEl.dataset.id)}
        >
          More Details
        </MenuItem>
        <MenuItem
          className="menuItemList"
          onClick={() => {
            setAnchorEl(null);
            approvedRequest(anchorEl.dataset.id);
          }}
        >
          Approve
        </MenuItem>
        <MenuItem
          className="menuItemList"
          onClick={() => {
            setAnchorEl(null);
            rejectedRequest(anchorEl.dataset.id);
          }}
        >
          Reject
        </MenuItem>
      </TableOptionsList>
    </Box>
  );
};

export default ManagerTask;
