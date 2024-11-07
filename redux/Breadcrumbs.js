// const { createReducer } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  foundFolders: [],
};

const breadCrumbsReducer = createSlice({
  name: "breadcrumbs",
  initialState: initialState,
  reducers: {
    storeFolders(state, action) {
      const this_state = state;
      const folders = action.payload;
      const flattenArray = (arr) => {
        let result = [];
        arr?.forEach((element) => {
          result.push({
            _id: element._id,
            folderName: element.folderName,
          });

          if (element?.subfolders?.length > 0) {
            result = result.concat(flattenArray(element.subfolders));
          }
        });
        return result;
      };
      this_state.folders = flattenArray(folders) || [];
    },
    getBreadcrumbs(state, action) {
      const this_state = state;
      console.log(action.payload);
      const foldersIds = action.payload;
      const findFolderById = (id) => {
        console.log(id);
        let foundFolders = [];
        id?.forEach((element) => {
          const foundFolder = state.folders.find((e) => element === e._id);
          foundFolders.push(foundFolder);
        });
        return foundFolders;
      };
      this_state.foundFolders = findFolderById(foldersIds) || [];
    },
  },
});

export const { storeFolders, getBreadcrumbs } = breadCrumbsReducer.actions;
export default breadCrumbsReducer.reducer;
