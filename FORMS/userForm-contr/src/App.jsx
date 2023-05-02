import React from "react";
import UserForm from "./UserForm";

const App = () => {
   const createUser = (e) => {
         e.preventDefault();
         console.log(this.state);
    }
    return (
        <UserForm onSubmit={createUser}/>
    )
}
export default App;