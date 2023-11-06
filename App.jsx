import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import DataTable from './DataTable'

const App = () => {

    
    const [data,setData] = useState([])
    const [searchData,setSearchData] = useState([])
   
    useEffect(() => {
        const getData = async () => {
            const dataGet = await fetch("https://jsonplaceholder.typicode.com/todos");
    
            const datainJson = await dataGet.json();
    
            setData(datainJson)
            setSearchData(datainJson)
        }
        getData()
    },[])
  return (
    <DataTable data={data} srchdata={searchData} setSearchData={setSearchData}/>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



