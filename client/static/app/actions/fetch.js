export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';
export const SET_MESSAGE = 'SET_MESSAGE';

export function requestPosts(navitem) {
    return {
      type: REQUEST_POSTS,
      navitem
    }
}