import { getUserSession } from "@/libs/getUserSession";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFolderStructure = createAsyncThunk(
  "folder/structure",
  async () => {
    const { user } = await getUserSession();
    const req = await axios.get(
      `/api/folder/structure?organizationId=${user?.organization?.value}`
    );
    const data = await req.data;
    return data?.data;
  }
);

const folderStructureSlice = createSlice({
  name: "folderStructureSlice",
  initialState: {
    loading: true,
    folders: null,
    error: false,
  },
  reducers: {},
  extraReducers(reducer) {
    reducer
      .addCase(fetchFolderStructure.pending, (state) => {
        const status = state;
        state.loading = true;
        status.error = false;
      })
      .addCase(fetchFolderStructure.fulfilled, (state, action) => {
        const status = state;
        status.loading = false;
        status.folders = action.payload;
        status.error = false;
      })
      .addCase(fetchFolderStructure.rejected, (state) => {
        const status = state;
        status.loading = false;
        status.error = true;
      });
  },
});

export default folderStructureSlice.reducer;
