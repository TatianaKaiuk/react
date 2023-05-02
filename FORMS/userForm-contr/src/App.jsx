import React from "react";
import UserForm from "./UserForm";

const App = () => {
   const createUser = (props) => {
         console.log(props);
    }
    return (
        <UserForm onSubmit={createUser}/>
    )
}
export default App;