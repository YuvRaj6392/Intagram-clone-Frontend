export const initialState = null
export const reducer=(state,action)=>{
    if(action.type==="USER")
    {
        return action.payload
    }
    if(action.type==="CLEAR")
    {
        return null
    }
    return state
}
//action describes the intention of the work(what you need to do)
//dispatch acts as a medium and sends action to the reducer
//reducer determines the change. Return the new state and tells the store what to do
//line number 9- state will become null!1