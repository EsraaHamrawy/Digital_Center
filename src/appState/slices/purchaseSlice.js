import { createSlice } from "@reduxjs/toolkit";
import { getRequestById } from "../../helpers/utilities/getRequestById";
import { todayDate } from "../../helpers/utilities/todayDate";

const initialState = {
  pendingRequests: [
    {
      id: 1350,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "16/09/2023",
      requestBy: "kenzy ali mohamed",
      itemsQuantity: 1,
      dueDate: "16/09/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "pending",
    },
    {
      id: 1349,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "16/09/2023",
      requestBy: "kenzy ali mohamed",
      itemsQuantity: 11,
      dueDate: "16/09/2023",
      purchaseFile: "",
      budgeted: "false",
      department: "Human Resources",
      status: "pending",
    },
    {
      id: 1303,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "25/07/2023",
      requestBy: "maryam ahmed hasan",
      itemsQuantity: 3,
      dueDate: "25/07/2023",
      purchaseFile: "",
      budgeted: "false",
      department: "Human Resources",
      status: "pending",
    },
    {
      id: 5012,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "21/04/2023",
      requestBy: "aliaa saad atallah",
      itemsQuantity: 4,
      dueDate: "21/04/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "pending",
    },
    {
      id: 3235,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "14/12/2023",
      requestBy: "reem ahmed mahmod",
      itemsQuantity: 22,
      dueDate: "14/12/2023",
      purchaseFile: "",
      budgeted: "false",
      department: "Human Resources",
      status: "pending",
    },
    {
      id: 3099,
      updateDate: "",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "14/12/2023",
      requestBy: "mahmod abdulmonem",
      itemsQuantity: 9,
      dueDate: "03/09/2023",
      purchaseFile: "",
      budgeted: "false",
      department: "Human Resources",
      status: "pending",
    },
  ],
  rejectedRequests: [
    {
      id: 2343,
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "16/09/2023",
      requestBy: "ali mohamed",
      itemsQuantity: 12,
      dueDate: "16/09/2023",
      purchaseFile: "",
      budgeted: "false",
      department: "Human Resources",
      status: "rejected",
    },
    {
      id: 5016,
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "21/04/2023",
      requestBy: "aliaa saad atallah",
      itemsQuantity: 6,
      dueDate: "21/04/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "rejected",
    },
  ],
  approvedRequests: [
    {
      id: 2830,
      approveBy: "mohamed mahsob",
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "16/09/2023",
      requestBy: "ali mohamed",
      itemsQuantity: 12,
      dueDate: "16/09/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "approved",
    },
    {
      id: 2016,
      approveBy: "mohamed mahsob",
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "21/04/2023",
      requestBy: "aliaa saad atallah",
      itemsQuantity: 6,
      dueDate: "21/04/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "approved",
    },
  ],
  completeRequests: [
    {
      id: 2800,
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "16/09/2023",
      requestBy: "ali mohamed",
      itemsQuantity: 12,
      dueDate: "16/09/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "completed",
    },
    {
      id: 2018,
      updateDate: "16/09/2023",
      requestTitle: "Lorem ipsum dolor sit amet consecte..",
      requestType: "hardware",
      itemName: "HP - personal Laptop - model Elite book 109-29",
      itemDescription: "itemDescription",
      requestDate: "21/04/2023",
      requestBy: "aliaa saad atallah",
      itemsQuantity: 6,
      dueDate: "21/04/2023",
      purchaseFile: "",
      budgeted: "true",
      department: "Human Resources",
      status: "completed",
    },
  ],
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    addNewPurchaseRequest: (state, { payload }) => {
      state.pendingRequests.unshift(payload);
    },

    approvedRequests: (state, { payload: { rowId } }) => {
      const row = getRequestById(state, rowId);
      state.pendingRequests = state.pendingRequests.filter(
        (request) => request.id != rowId
      );
      const updatedRow = {
        ...row,
        status: "approved",
        updateDate: todayDate(),
        approveBy: "Mohamed Mahsob",
      };
      state.approvedRequests.unshift(updatedRow);
    },

    rejectedRequests: (state, { payload: { rowId } }) => {
      const row = getRequestById(state, rowId);
      state.pendingRequests = state.pendingRequests.filter(
        (request) => request.id != rowId
      );
      const updatedRow = {
        ...row,
        status: "rejected",
        updateDate: todayDate(),
      };
      state.rejectedRequests.unshift(updatedRow);
    },
    rejectedApprovedRequests: (state, { payload: { rowId } }) => {
      const row = getRequestById(state, rowId);
      state.approvedRequests = state.approvedRequests.filter(
        (request) => request.id != rowId
      );
      const updatedRow = {
        ...row,
        status: "rejected",
        updateDate: todayDate(),
      };
      state.rejectedRequests.unshift(updatedRow);
    },
    completeRequestsAction: (state, { payload: { rowId } }) => {
      const row = getRequestById(state, rowId);
      state.approvedRequests = state.approvedRequests.filter(
        (request) => request.id != rowId
      );
      const updatedRow = {
        ...row,
        status: "completed",
        updateDate: todayDate(),
      };
      state.completeRequests.unshift(updatedRow);
    },
  },
});

export default purchaseSlice.reducer;

export const {
  addNewPurchaseRequest,
  approvedRequests,
  rejectedRequests,
  rejectedApprovedRequests,
  completeRequestsAction,
} = purchaseSlice.actions;

export const selectPendingRequests = (state) => state.purchase.pendingRequests;

export const selectRejectedRequests = (state) =>
  state.purchase.rejectedRequests;

export const selectApprovedRequests = (state) =>
  state.purchase.approvedRequests;

export const selectcompleteRequests = (state) =>
  state.purchase.completeRequests;

export const selectAllPurchaseRequests = (state) => ({
  pendingRequests: state.purchase.pendingRequests,
  rejectedRequests: state.purchase.rejectedRequests,
  approvedRequests: state.purchase.approvedRequests,
  completeRequests: state.purchase.completeRequests,
});
