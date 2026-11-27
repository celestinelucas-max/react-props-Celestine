import { Link } from 'react-router-dom'


export default function Navbar () {

    return (
        <>
        <div className='nav'>

            <h3> Navbar </h3>

            <Link to="">Homepage</Link>

            <Link to="spotlist">Liste des spots</Link>

            <Link to="createspot">Creer un nouveau spot</Link>

            <Link to="updatespot">Mettre à jour</Link>

            <Link to="details">Détails</Link>

            <Link to="connexion"> <button>login</button></Link>



        </div>

        

        </> 
    )
        
}


