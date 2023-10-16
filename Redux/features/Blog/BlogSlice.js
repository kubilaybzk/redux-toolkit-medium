import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    userId: "1",
    DateTime: "2023-10-16T11:45:20.087Z",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const BlogSlice = createSlice({
  initialState: initialState,
  name: "Blogs",
  reducers: {
    AddPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(), //Redux içinde bulunan id değerini 
            title, //Dışarıdan gelecek olan title
            content, //Dışarıdan gelecek olan content
            date: new Date().toISOString(), //Default
            userId, //Dışarıdan gelecek olan UserId
            reactions: {
              thumbsUp: 0,//Default
              wow: 0,//Default
              heart: 0,//Default
              rocket: 0,//Default
              coffee: 0,//Default
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      //Reacksiyon butonları için gerekli olan reducer
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const selectAllPosts = (state) => state.Blogs;
export const { AddPost, reactionAdded } = BlogSlice.actions;
export default BlogSlice.reducer;
