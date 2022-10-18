const initialState = [

    {
    id:0,
    email:"test@gmail.com",
    password:"123456789",
    number:"12345"
    },
{
    id:2,
    email:"test1@gmail.com",
    password:"1234567",
    number:"12345"
 },
 {
    id:3,
    email:"test2@gmail.com",
    password:987654331,
    number:"12345"
    },
{
    id:4,
    email:"test3@gmail.com",
    password:987654331,
    number:"12345"
 },
]

const contactReducer = (state=initialState, action)=> {

        switch(action.type){

          case "ADD_CONTACT":
            state =  [...state,action.payload]
              return state;

          case "DELETE_USER":
            // state = [...state,action.payload]
            const updatedUser = state.filter((user)=> user.id != action.payload )
            return updatedUser
            default:
                return state;

           case "EDIT_CONTACT":
            const editUser = state.map((user)=> user.id == action.payload.id ? action.payload : user)   
            return editUser
         
        }
}

export default contactReducer;