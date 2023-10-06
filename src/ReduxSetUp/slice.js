//for diff purpose/api
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    Profile: {
      added: false,
      content: {
        Name: "",
        "E-mail": "",
        "Contact Number": "",
      },
    },
    Education: {
      added: false,
      content: {
        Degree: "",
        College: "",
        Country: "",
        "Start Date": "",
        "End Date": "",
        Description: "",
      },
    },
    Skill: {
      added: false,
      content: {
        skill: " ", //in arraay
        "Profeciency Level": "",
      },
    },
    Professional_Experience: {
      added: false,
      content: {
        "Job Title": "",
        Employer: "",
        Country: "",
        "Start Date": "",
        "End Date": "",
      },
    },
    Projects: {
      added: false,
      content: {
        "project name": "",
        desc: "",
      },
    },
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.data[action.payload].added = true; //in payload key will come fromcomponent
    },
    addDataOfContent: (state, action) => {
      state.data[action.payload.heading].content = {
        ...action.payload.contentData,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContent, addDataOfContent } = counterSlice.actions;

export default counterSlice.reducer;
// // {() => dispatch(addQuantity(item))}
// // const cartList = useSelector((state) => state.cartReducer.cart);
// Projects: {
//       added: false,
//       content: {
//         "project name": "",
//         desc: "",
//       },
//     },
