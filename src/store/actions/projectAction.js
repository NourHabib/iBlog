export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'ADD_PROJECT', project });
        }).catch((err)=>{
            dispatch({ type: 'ADD_PROJECT_ERROR', err })
        })   
    }
}