export default (state, action) => {
    switch(action.type){
        case "add":
            console.log(state)
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'delete':
            console.log(action.payload.id)
            return {...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
        


        default:
            return state
    }
}