import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'
import Producttable from '../../components/product/Producttable'

const Productmanagement = () => {
  return (
    <div className='flex flex-col  h-[89vh] px-4 w-full'>
        <Producttable/>
    </div>
  )
}

export default Productmanagement