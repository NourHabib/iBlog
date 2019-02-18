const initState = {
    projects:[
        {id: '1',title:'Project 1',content:'Sint irure sunt est laboris velit duis labore est.'},
        {id: '2',title:'Project 2',content:'Sint irure sunt est laboris velit duis labore est.'},
        {id: '3',title:'Project 3',content:'Sint irure sunt est laboris velit duis labore est.'}
    ]
};
const projectReducer = (state = initState, action ) => {
    switch (action.type){
        case 'ADD_PROJECT':
            console.log('created Project', action.project); 
            return state;
        case 'ADD_PROJECT_ERROR':
            console.log('created Project Error', action.err);
            return state;
        default:
            return state;
    }
     return state;
}

export default projectReducer;