import axios from 'axios'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'


const Ordersmanagement = () => {
  const [orders, setorders] = useState([]);
    useEffect(() => {
      const allorders= async () => {
        await axios.get("http://localhost:8000/order/allorders")
        .then((res)=>{
          setorders(res.data.orders)
        })
      }
      allorders()
    });
  return (
    <div className='p-2 flex flex-col gap-2'>
      <div className='text-xl text-white'>Order Management</div>
        <DataTable rows={7 }  paginator className='dark-table  order-table text-[13px]! max-w-[78vw]' value={orders}>
            <Column className='border-r-2 text-wrap text-[13px]! border-2 border-zinc-600! border-r-zinc-800!' field='userid' header='Userid'/>
            <Column className='border-r-2  text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='city' header='city'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='address' header='Address'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! text-[13px]! border-r-zinc-800!' field='productname' header='Productname'/>
            <Column
            className='border-r-2 text-wrap border-2 border-zinc-600!  text-[13px]! border-r-zinc-800!'
            header="image"
            body={(rowdata)=>(
              <img 
                  src={`http://localhost:8000/images/${rowdata.image}`}
              />
            )}
            />
            <Column className='border-r-2 text-wrap text-[13px]! border-2 border-zinc-600! border-r-zinc-800!' field='productid' header='Productid'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='Date' header='Date'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='price' header='price'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='qty' header='Qty'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!'  header='Delevery charges' body={()=>{
              return <div>200</div>
            }}/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='bill' header='Bill'/>
            <Column className='border-r-2 text-wrap border-2 border-zinc-600! border-r-zinc-800!' field='status' header='Status'/>
        </DataTable>
    </div>
  )
}

export default Ordersmanagement