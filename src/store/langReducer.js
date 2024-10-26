const defaultState = {
  lang: 'en',
};
function langReducer(state = defaultState, action) {
  if (action.type == 'EN') {
    return { ...state, lang: 'en' };
  } else if (action.type == 'UZ') {
    return { ...state, lang: 'uz' };
  } else {
    return state;
  }
}
export default langReducer;
