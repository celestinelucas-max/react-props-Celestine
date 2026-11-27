import { useState } from "react"


export default function Connexion () {
 

const [usernameInput, setusernameInput] = useState("")
const [passwordInput, setpasswordInput] = useState("")

const sendValue = () => {
    console.log(usernameInput);
    console.log(passwordInput);
}


    return (
        <>
            <div>
                <div className="loginInput">
                    <label>Username</label>
                    <input 
                    type="text"
                    onChange={(e) => setusernameInput(e.target.value)}/>
                </div>
                
                <div className="loginInput">
                    <label>Password</label>
                    <input 
                    type="text"
                    onChange={(e) => setpasswordInput(e.target.value)}/>
                </div>

                <button onClick={() => sendValue ()}>Login</button>

                {/* J'aimerais bien aussi effacer le texte une fois qu'on clique sur login */}
                
    
            </div>
        </>
    )
}



