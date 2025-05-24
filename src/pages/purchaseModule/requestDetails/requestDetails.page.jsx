import { useParams, useLocation, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import styles from "./requestDetails.module.css";
import ProgressBar from "../../../components/general/progressBar/progressBar.component";
import {
  selectAllPurchaseRequests,
  approvedRequests,
  rejectedRequests,
  completeRequestsAction,
  rejectedApprovedRequests,
} from "../../../appState/slices/purchaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import RequestImagePlaceholder from "../../../components/requestDetails/requestImagePlaceholder/requestImagePlaceholder.component";

const RequestDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    pendingRequests,
    rejectedRequests: rejectedRequestsData,
    approvedRequests: approvedRequestsData,
    completeRequests,
  } = useSelector(selectAllPurchaseRequests);

  const allRequests = [
    ...pendingRequests,
    ...rejectedRequestsData,
    ...approvedRequestsData,
    ...completeRequests,
  ];

  const requestDetails = allRequests.find((request) => request.id == id);

  const queryParams = new URLSearchParams(location.search);
  const comesFrom = queryParams.get("from") || "/purchase/purchaseLog"; // Default fallback

  const handleBackTo = () => {
    navigate(comesFrom);
  };
  const handleRejectStatuseClick = () => {
    if (requestDetails.status === "pending") {
      dispatch(rejectedRequests({ rowId: requestDetails.id }));
    } else if (requestDetails.status === "approved") {
      dispatch(rejectedApprovedRequests({ rowId: requestDetails.id }));
    }
  };

  return (
    <section>
      <div className={styles.backToBtn} onClick={handleBackTo}>
        <ArrowCircleLeftIcon fontSize="large" className={styles.backToIcon} />
        <span>Back to Previous Page</span>
      </div>
      <div className={styles.contentContainer}>
        <ProgressBar
          status={requestDetails.status}
          steps={[
            {
              label: "Create request",
              subLabel: "new purchase request",
            },
            {
              label: "Ongoing",
              subLabel: "manager approval",
            },
            {
              label: "Request Closing",
              subLabel: "purchase request completion",
            },
          ]}
        />
        <Grid className={styles.detailsContainer} container spacing={2}>
          <Grid item xs={6}>
            <div className={styles.dataContainer}>
              <div className={styles.title}>request title:</div>
              <div className={styles.value}>{requestDetails.requestTitle}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>request date:</div>
              <div className={styles.value}>{requestDetails.requestDate}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>requested by:</div>
              <div className={styles.value}>{requestDetails.requestBy}</div>
            </div>
            {requestDetails.approveBy && (
              <div className={styles.dataContainer}>
                <div className={styles.title}>approved by:</div>
                <div className={styles.value}>{requestDetails.approveBy}</div>
              </div>
            )}

            <div className={styles.dataContainer}>
              <div className={styles.title}>type:</div>
              <div className={styles.value}>{requestDetails.requestType}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>budget policy:</div>
              <div className={styles.value}>
                {requestDetails.budgeted ? "budgeted" : "not budgeted"}
              </div>
            </div>

            <div className={styles.dataContainer}>
              <div className={styles.title}>dueDate:</div>
              <div className={styles.value}>{requestDetails.dueDate}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>status:</div>
              <div
                className={`${styles.statusVal} ${
                  requestDetails.status === "pending"
                    ? "pending-cell"
                    : requestDetails.status === "rejected"
                    ? "rejected-cell"
                    : requestDetails.status === "approved"
                    ? "approved-cell"
                    : requestDetails.status === "completed"
                    ? "completed-cell"
                    : ""
                }`}
              >
                {requestDetails.status}
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>request workflow:</div>
              <div className={styles.value}>
                {requestDetails.updateDate ? requestDetails.updateDate : "--"}
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>Item:</div>
              <div className={styles.value}>{requestDetails.itemName}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>Quantity:</div>
              <div className={styles.value}>{requestDetails.itemsQuantity}</div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.title}>item description:</div>
              <div className={styles.value}>
                {requestDetails.itemDescription}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.title}>Item picture:</div>
            {requestDetails.purchaseFile ? (
              <img
                className={styles.itemImg}
                src={`${requestDetails.purchaseFile}`}
                alt=""
              />
            ) : (
              <RequestImagePlaceholder />
            )}
          </Grid>
        </Grid>
        {comesFrom !== "/purchase/purchaseLog" &&
          comesFrom !== "/purchase/managerlog" &&
          comesFrom !== "/purchase/procurementlog" &&
          ((requestDetails.status !== "approved" &&
            requestDetails.status !== "rejected") ||
            comesFrom !== "/purchase/managertask") &&
          ((requestDetails.status !== "completed" &&
            requestDetails.status !== "rejected") ||
            comesFrom !== "/purchase/procurementtasks") && (
            <Grid item xs={12}>
              <div className={styles.controlesContainer}>
                <Button
                  variant="contained"
                  className={styles.rejectBtn}
                  onClick={handleRejectStatuseClick}
                >
                  reject
                </Button>
                {requestDetails.status === "pending" && (
                  <Button
                    className={styles.aproveBtn}
                    variant="contained"
                    onClick={() =>
                      dispatch(
                        approvedRequests({
                          rowId: requestDetails.id,
                        })
                      )
                    }
                  >
                    approve
                  </Button>
                )}
                {comesFrom !== "/purchase/managertask" &&
                  requestDetails.status === "approved" && (
                    <Button
                      className={styles.aproveBtn}
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          completeRequestsAction({
                            rowId: requestDetails.id,
                          })
                        )
                      }
                    >
                      completed
                    </Button>
                  )}
              </div>
            </Grid>
          )}
      </div>
    </section>
  );
};

export default RequestDetails;
