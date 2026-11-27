import { useState } from "react"
import { useSpotContext } from "../assets/hookperso/usespotcontext"





export default function  SpotList () {

 const {Spots,getSpot} = useSpotContext()
    
//  id: "1",
//         type:"Refuge",
//         title:"Refuge du Pirée",
//         desciption:"description détaillée",
//         features:[],
//         //Liste  de Booléens,
//         spotPic : "image.jpn",
//         positionX:"50.56.872",
//         positionY:"18.25.86",
//         idcreateur:"",
//         visiteurs:[]

    return (

        <>
        <h1> LISTE DE TOUS LES LIEU </h1>
        
        {SpotList.map((e) => (
            <li key={e.id}>
                <div>
                    <h2>{e.title} - {e.type} </h2>
                    <p> {e.description} </p>
                    <p> {e.features} </p>   
                    {/* Fonction qui présente la liste des features avec des logo */}
                    

                </div>


            </li>
        )
         
        


        )}

        <button>Créer un nouveau lieu</button>
        
        </>
    

    )
}

