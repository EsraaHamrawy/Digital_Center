import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { selectAllPurchaseRequests } from "../../../appState/slices/purchaseSlice";
import { useSelector } from "react-redux";
import LaunchIcon from "@mui/icons-material/Launch";
import { useLocation, useNavigate } from "react-router-dom";
const ProcurementLog = () => {
  const { rejectedRequests, completeRequests } = useSelector(
    selectAllPurchaseRequests
  );

  const navigate = useNavigate();
  const location = useLocation();

  const goToRequestDetails = (id) => {
    const currentPath = location.pathname;
    navigate(
      `/purchase/requestDetails/${id}?from=${encodeURIComponent(currentPath)}`
    );
  };

  const rows = [...rejectedRequests, ...completeRequests];

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
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "requestBy",
      headerName: "approved by",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "department",
      headerName: "department",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "status",
      width: 200,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        let cellClassName = "";
        if (params.row.status === "pending") {
          cellClassName = "pending-cell";
        } else if (params.row.status === "rejected") {
          cellClassName = "rejected-cell";
        } else if (params.row.status === "approved") {
          cellClassName = "approved-cell";
        } else if (params.row.status === "completed") {
          cellClassName = "completed-cell";
        }
        return (
          <div className={`statusCell ${cellClassName}`}>{params.value}</div>
        );
      },
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
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "actionButton",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <Box className={"cellActions"}>
            <Box className="more-infoClass">
              <LaunchIcon
                className="actionicon"
                onClick={() => goToRequestDetails(params.row.id)}
              />
            </Box>
          </Box>
        );
      },
    },
  ];

  const customLocaleText = {
    noRowsLabel: "No data",
  };

  return (
    <Box>
      <div>
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
      </div>
    </Box>
  );
};

export default ProcurementLog;
