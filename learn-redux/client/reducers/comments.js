function postComments(state=[], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      const comment = { user: action.author, text: action.comment};
      return [...state, comment];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      const { i } = action;
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ];
    default:
      return state;
  }  
}

function comments(state=[], action) {
  const { postId } = action;
  if (typeof postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // override this post with a new one
      [postId]: postComments(state[postId], action)
    }
  }
  return state;
}

export default comments;
