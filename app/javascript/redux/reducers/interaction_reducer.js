const initialState = {
    tweete_id: null,
    liked: false
};

export const likeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LIKE': return {
            ...state,
            liked: true,
            tweete_id: action.payload
        };
        case 'LIKE_ERROR': return {
            ...state,
            liked: false
        };
        default: return state
    }
}