import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incommingCorrs: [
    {
      id: 1018,
      reg: "19-23",
      corrsNumber: 1,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "Lorem ipsum dolor sit amet consecte..",
      corrsType: "Secretariat",
      incomingFrom: "National Petroleum Comp..",
      date: "16/09/2023",
    },
    {
      id: 6142,
      reg: "30-23",
      corrsNumber: 2,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "Lorem ipsum dolor sit amet consecte..",
      corrsType: "General import",
      incomingFrom: "Arabian African Bank",
      date: "16/09/2023",
    },
    {
      id: 7890,
      reg: "86-23",
      corrsNumber: 3,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "General import",
      incomingFrom: "National Petroleum Comp..",
      date: "16/09/2023",
    },
    {
      id: 1303,
      reg: "89-23",
      corrsNumber: 4,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "Secretariat",
      incomingFrom: "Crona and Sons",
      date: "25/07/2023",
    },
    {
      id: 5012,
      reg: "90-23",
      corrsNumber: 5,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "Secretariat",
      incomingFrom: "Bahringer - Gleichner",
      date: "16/09/2023",
    },
    {
      id: 1019,
      reg: "92-23",
      corrsNumber: 6,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "Secretariat",
      incomingFrom: "Keebler and MacGyver",
      date: "21/04/2023",
    },
    {
      id: 3752,
      reg: "93-23",
      corrsNumber: 7,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "General import",
      incomingFrom: "Bergnaum, Boyle and Bode",
      date: "16/09/2023",
    },
    {
      id: 8731,
      reg: "94-23",
      corrsNumber: 8,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "General import",
      incomingFrom: "Keebler, Kautzer and Terry..",
      date: "03/09/2023",
    },
    {
      id: 3099,
      reg: "95-23",
      corrsNumber: 9,
      receivedWay: "email",
      corrsFile: "",
      corrsDetails: "corrsDetails",
      corrsTitle: "orem ipsum dolor sit amet consecte..",
      corrsType: "Secretariat",
      incomingFrom: "Keebler and MacGyver",
      date: "21/04/2023",
    },
  ],
  outGoingCorrs: [],
};

const corrsSlice = createSlice({
  name: "corrs",
  initialState,
  reducers: {
    setIncommingCorrs: (state, { payload }) => {
      state.incommingCorrs.unshift(payload);
    },
  },
});

export default corrsSlice.reducer;

export const { setIncommingCorrs } = corrsSlice.actions;

export const selectIncommingCorrs = (state) => state.corrs.incommingCorrs;
export const selectOutGoingCorrs = (state) => state.corrs.outGoingCorrs;
