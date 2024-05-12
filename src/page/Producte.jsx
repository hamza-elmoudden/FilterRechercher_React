import {Card} from "../Card"
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export const Producte = () => {
    const [searchText, setSearchText] = useState("")
    const [Ginder,setGinder] = useState("")
    const [Category,setCategory] = useState("")
    const [Price,setPirce] = useState(0)
    const marks = [
        {
          value: 0,
          label: '0$',
        },
        {
          value: 50,
          label: '50$',
        },
        {
          value: 100,
          label: '100$',
        },
      ];

    
    function valuetext(value) {
        return `${value}°C`;
    }

    let data = useSelector((state)=> state.producte[0])

    data = Ginder === "" ? data : data.filter(prod => prod.type === Ginder)

    data = Category === "" ? data : data.filter(prod => prod.category === Category)

    data = Price  === 0 ? data : data.filter(prod => prod.price <= Price )


    const filteredData = data.filter(prod => prod.title.toLowerCase().includes(searchText.toLowerCase()));
  
    console.log(data)

    return (
      <>
      <section className="py-10"></section>
      <section className="he flex">
        <div className="w-1/3  pt-32 px-8 space-y-16">
            <div>
                <select className="w-full h-16 font-bold text-xl capitalize px-5 rounded-xl"
                onChange={(e)=>setCategory(e.target.value)}
                
                >
                    <option className="capitalize" value="">All</option>
                    <option className="capitalize" value="T-Shirt" >T-Shert</option>
                    <option className="capitalize" value="Bage">Bage</option>
                    <option className="capitalize" value="Chose">Chose</option>
                </select>
            </div>
            <div className="sapce-y-10">
                <FormControl className="space-y-5">
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={(e)=>setGinder(e.target.value)
                        
                        }
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="" control={<Radio />} label="All" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
            <Box sx={{ width: "100%" }}>
                <Slider
                    aria-label="Always visible"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                    onChange={(e)=> setPirce(+e.target.value)}
                />
            </Box>
            </div>
        </div>
         <div className="w-full">
            <div className="md:py-10 text-center pt-32">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="px-6 py-3 text-xl outline-none border border-black w-full md:w-1/3 rounded-full" type="text" />
            </div>
            <div className="flex row  items-center gap-10 justify-center py-10 flex-wrap"> 
            {
                filteredData.map((prod) => {
                return <Card prod={prod} key={prod._id} /> 
                })
            }
            </div>
         </div>
      </section>
      </>
    )
}
