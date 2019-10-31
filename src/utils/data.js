import {useState,useEffect} from 'react'
import axios from 'axios'

export function useData() {
    const [data,setData] = useState();

    useEffect(() => {
       (async () => {
           const {data} = await axios.get(`https://panjs.com/ywc.json`)
           setData(data)
        })()
    },[])

    return data
}