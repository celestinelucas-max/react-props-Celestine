import { useState } from "react"

const [user, setUser] = useState({
    id : 1,
    userName : "Luc18",
    adress : "luc18@gmail.com",
    password : "mot2passe"
})


export default function Membre () {


    
    
    return (
        <p>Je suis membre</p>
    )
}