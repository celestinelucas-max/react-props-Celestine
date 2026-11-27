import { useState } from "react"
import { useSpotContext } from './../assets/hookperso/usespotcontext';

export default function CreateSpot () {

    const {addSpot,spotType,spotFeatures} = useSpotContext()
    


    const [newSpot, setnewSpot] = useState({
        type:"",
        title:"",
        desciption:"",
        features:[],
        //Liste  de Booléens,
        spotPic : "",
        positionX:"",
        positionY:"",
    })

    const [newFeatures, setnewFeatures] = useState({
        
    })

    const Addnewfeatures = (newFeature) => {
        setnewSpot((prev)=> ({...prev, features: newFeature}))
        console.log(newFeature);
       

    }



    return (
    <>
        <h1>Créer un nouveau spot</h1>
        <div>
            <label> Latitude </label>
            <input 
            type="text"
            onChange={(e) => setnewSpot((prev) => ({...prev,positionY:e.target.value}))}/>
        </div>

        <div>
            <label> Longitude </label>
            <input 
            type="text"
            onChange={(e) => setnewSpot((prev) => ({...prev,positionX:e.target.value}))}/>
        </div>

        <div>
            <label> Type d'abris </label>
           <select onChange={(e) => setnewSpot((prev) => ({...prev,type:e.target.value}))}>
                {spotType.map((s) => (
                    <option value={s.nameType} key={s.id}> {s.nameType} <img src={s.logo} width={50}/> </option>

                ))}
           </select>

        </div>

        <div>
            <label> Nom  </label>
            <input 
            type="text"
            onChange={(e) => setnewSpot((prev) => ({...prev,title:e.target.value}))}/>
        </div>
        <div>
            <label> Description </label>
            <input 
            type="text"
            onChange={(e) => setnewSpot((prev) => ({...prev,desciption:e.target.value}))}/>
        </div>

        <div>

            <h3>Liste des caractéristique</h3>
            <ol>

            {spotFeatures.map((i) => <div>
                <label value={i} >{i}</label>
                <input
                type="checkbox" 
                defaultValue={false} 
                onChange={(e) => setnewFeatures((prev) => ({...prev,i}))}/>
                {console.log(newFeatures)}
               
        
                
            </div>)}

                
            </ol>
        
        </div>


        <div>
            <label> Télécharger des photos ici : </label>
            <input 
            type="jpn"
            onChange={(e) => setnewSpot((prev) => ({...prev,spotPic:e.target.value}))}/>
        </div>

        <button onClick={() => addSpot(newSpot)}>Créer</button>

    </>)
}
        


        
       
        
        
        
        
