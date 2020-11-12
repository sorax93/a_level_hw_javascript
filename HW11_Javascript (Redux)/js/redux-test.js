function createStore(reducer){
    let state = reducer(undefined,{})
    let cbs   = []

    function dispatch(action){
        if (typeof action === 'function'){
            return action(dispatch)
        }
        let newState = reducer(state,action)
        if (state !== newState){
            state = newState
            for (let cb of cbs) cb()
        }
    }
    
    return {
        getState(){
            return state
        },
        dispatch: dispatch,
        subscribe(cb){ 
            cbs.push(cb)
            return () => {
                cbs = cbs.filter(someElement => someElement !== cb)
            }
        }
    }
}

const store = createStore((state={}, 
                           {type, status, payload, error, name}) =>
    (type === 'PROMISE') ? {...state, [name]: {status, payload, error}} : state) 

console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

const actionPromise = (name, p) => { 

    const actionPending = () => ({type : 'PROMISE', status: 'PENDING', name}) 
    const actionResolved = payload => ({type : 'PROMISE',  
                                        status: 'RESOLVED', 
                                        payload, name})
    const actionRejected = error => ({type : 'PROMISE', 
                                      status: 'REJECTED', 
                                      error, name})
    return async dispatch => {
        try {
            dispatch(actionPending())
            let result = await p
            dispatch(actionResolved(result))
            return result;
        }
        catch(e){
            dispatch(actionRejected(e))
        }
    }
}

const gql = (url='http://shop-roles.asmer.fs.a-level.com.ua/graphql', query='', variables={}) =>
    fetch(url, {
        method: 'POST',
        headers:{
             'Accept': 'application/json',
              'Content-Type': 'application/json'            
            },
        body: JSON.stringify({query, variables})
    }).then(res => res.json())


let inLogin = document.querySelector('#inputLogin');
let inPass = document.querySelector('#inputPassword');
let loginStatus = document.querySelector('#loginStatus');
let regStatus = document.querySelector('#regStatus');

function loginQuery() {
    loginStatus.innerHTML="Login Status:";
    regStatus.innerHTML="Register Status:";
    regStatus.style.color = 'black'; 
    actionPromise('login',gql(undefined, `
        query log($login:String, $password:String){
            login(login:$login, password:$password)
        }
         
    `, {login: inLogin.value, password: inPass.value}).then(data => {
        if (data.data.login === null){
            loginStatus.innerHTML="Login Status: You enter incorrect data!";
            loginStatus.style.color = 'red';
        } else {
            loginStatus.innerHTML="Login Status: You are logged in!";
            loginStatus.style.color = 'green';
        }
    }));
    inLogin.value = "";
    inPass.value = "";
}

function registerQuery() {
    regStatus.innerHTML="Register Status:";
    actionPromise('register',gql(undefined, `
        mutation reg($login:String, $password:String){
            UserUpsert(user: {login:$login, password:$password}){
                _id
                login
            }
        }
         
    `, {login: inLogin.value, password: inPass.value}).then(data => {
        if (data.data.UserUpsert !== null){
            regStatus.innerHTML= "Register Status: You are registered";
            regStatus.style.color = 'green';
        } else {
            regStatus.innerHTML="Register Status: You enter incorrect data!";
            regStatus.style.color = 'red';
        }
    }));
}

const actionLogin = (login, password) =>
    actionPromise('login', loginQuery(login, password));
    


const actionRegister = (login, password) =>
    async dispatch => {
        await dispatch(actionPromise('register', registerQuery(login, password))); //REGISTER
        dispatch(actionLogin(login, password)); //LOGIN
    };
