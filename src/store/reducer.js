export function reducer(state, {type, payload}){
    switch(type){
        case 'SET_CHARACTERS':{
            return {
                ...state,
                characters: payload || [],
                loading: false
            }
        } case 'SET_COUNT':{
            return{
                ...state,
                count: payload
            }
        } case 'CHANGE_CURRENT_PAGE':{
            return{
                ...state,
                currentPage: payload,
                loading: true
            }
        } case 'CHANGE_STATUS':{
            return{
                ...state,
                status: payload,
                currentPage: 1,
                loading: true
            }
        } case 'SET_SEARCH':{
            return{
                ...state,
                searchValue: payload,
                currentPage: 1
            }
        } case 'SET_LOADING':{
            return{
                ...state,
                loading: true
            }
        } case 'SET_CHARACTER':{
            return{
                ...state,
                loading: false,
                character: payload
            }
        } case 'CLEAR_DETAILS':{
            return {
                ...state,
                character: []
            }
        }
    }
}