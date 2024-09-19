import { getUserSession } from "@/libs/getUserSession";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;

export const fetchFolderStructure = createAsyncThunk(
  "folder/structure",
  async () => {
    const { user } = await getUserSession();
    const req = await axios.get(
      `${API_URL}/folder/structure?organizationId=${user?.organization?.value}`
    );
    const data = await req.data;
    return data?.data;
  }
);

const folderStructureSlice = createSlice({
  name: "folderStructureSlice",
  initialState: {
    loading: true,
    folders: [],
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
