import { CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS } from "../../constants";

import * as api from '../../services/api';

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    console.log(data);
    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createAPI(post);
    console.log(data);
    dispatch({ type: CREATE_POST, payload: data });
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
