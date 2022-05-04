import { CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS } from "../../constants";

import * as api from '../../services/api';

export const getAllPosts = () => async (dispatch) => {
  try {
    const { posts } = await api.fetchAllPosts();
    dispatch({ type: FETCH_POSTS, payload: posts });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    const { post } = await api.createAPI(data);
    dispatch({ type: CREATE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    const { post } = await api.updateAPI(id, data);
    dispatch({ type: UPDATE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteAPI(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
}
