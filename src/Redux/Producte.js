import { createSlice } from "@reduxjs/toolkit"
import { client } from "../Sanity/Client"

const initialState = []

async function getprodatcet(){
    const data = await client.fetch(`
        *[_type == 'producte']{
            
            _id,

            title,

            category,
            
            type,

            price,

            image_one{
                asset{
                _ref
                }
            },

            image_two{
                asset{
                _ref
                }
            },

            image_three{
                asset{
                _ref
                }
            },
        }
    `)

    initialState.push(data)
    
}

await getprodatcet()

const producte = createSlice({
    name:"producte",
    initialState ,
})



export default producte.reducer