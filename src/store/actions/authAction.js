export const logIn = (credentials) =>{
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const logOut = () =>{
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err });
        });
    }
}


export const newUser = (userInfo) => {
    return(dispatch,getState,{ getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                initials: userInfo.firstName[0] + userInfo.lastName[0]
            })
        }).then(() =>{
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err })
        })
    }
}
