import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "http://localhost:3000/posts";

const INITIAL_STATE = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk( 'posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
  },
});