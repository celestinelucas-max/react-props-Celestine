import { createContext,useState } from "react";

export const SpotContext = createContext(null)

export default function SpotProvider({children}){


    const [Spots, setSpots] = useState([
        {
        id: "1",
        type:"Refuge",
        title:"Refuge du Pirée",
        desciption:"description détaillée",
        features:[],
        //Liste  de Booléens,
        spotPic : "image.jpn",
        positionX:"50.56.872",
        positionY:"18.25.86",
        idcreateur:"",
        visiteurs:[]
        },
        {
        id: "2",
        type:"Cabane",
        title:"Burons isolées aux alentours de Nasbinal",
        desciption:"description détaillée",
        features:[],
        //Liste  de Booléens,
        spotPic : "image2.jpn",
        positionX:"50.56.872",
        positionY:"18.25.86",
        idcreateur:"",
        visiteurs:[]
        },

    ])
    // const spotType = ["Refuge","Refuge non gardé","Cabane","Chez l'habitant","Camping","Bivouac"]

    const spotType = [{
        id: 1,
        nameType : "Refuge",
        logo : "logo1.jpn",
            
    },
    { id: 2,
        nameType : "Refuge non gardé",
        logo : "ilogo1.jpn",

    },
    {
        id: 3,
        nameType : "Cabane",
        logo : "image",
    },
    {
        id: 4,
        nameType : "Chez l'habitant",
        logo : "image",
    },
    {
        id: 5,
        nameType : "Camping",
        logo : "image",
    },
    {
        id: 6,
        nameType : "Zone de bivouac",
        logo : "image",
    }]

    const [spotFeatures, setspotFeatures]  = useState([
        "Accès cuisine", "Feu interdit", "Couchage", "Table", "Restaurant"])

    const addSpot = (newSpot) => {
        console.log(newSpot);
    }

    const getSpot = () => {
        Spots
    }

    const getSpotById = (id) => {
        console.log(id);
    }

    const updateSpot = (id,spot) => {
        console.log(id);
    }

    const deleteSpot = (id) => {
        console.log(id);
    }

// Transmets les valeurs dnas les curly beacket aux enfants de SpotContext
    return (
        <SpotContext.Provider value={{Spots,spotType,spotFeatures,addSpot,getSpot,getSpotById,updateSpot,deleteSpot}}>
            {children}
        </SpotContext.Provider>
    )
}