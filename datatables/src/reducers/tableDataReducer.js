const tableDataReducer = (state= [], action) => {

    switch (action.type) {
        case 'regData':
            return state.concat(action.data);
        default:
            return state;
    }
}

export default tableDataReducer;