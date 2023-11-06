import React, { useEffect, useState } from 'react'
const LIMIT = 10;

const DataTable = ({data}) => {
  
    const [pageNumber,setPageNumber] = useState(LIMIT);

    const [search,setSearch] = useState("")

    const filteredData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

    


    const handlePagination = (e) => {
        const pno = e.target.value * LIMIT;
        setPageNumber(pno)  
    }

  return <div>
  <input value={search} type = "search" style={{padding:"12px"}} onChange = {(e) => setSearch(e.target.value)} placeholder='Search...'></input>
  <table>
  <tbody>
  <tr>
    <th>Id</th>
    <th>Title</th>
    <th>Is Complete?</th>
  </tr>
  {filteredData.slice(pageNumber-LIMIT,pageNumber).map((ele) => {
    return <tr>
        <td>{ele.id}</td>
        <td>{ele.title}</td>
        <td>{ele.completed ? "No" : "Yes"}</td>
    </tr>
  })}
  </tbody>
</table>
<div className='pagination-wrapper'>
  {[...Array(Math.ceil(filteredData?.length / LIMIT)).keys()].map((e,idx) => {
    //Used math.ceil() above to ensure that whenever we divide with the limit it does not go in decimal
    return <button onClick={handlePagination} className='paginationBox' value={e+1}>{e+1}</button>
  })}
</div>
</div>
}

export default DataTable