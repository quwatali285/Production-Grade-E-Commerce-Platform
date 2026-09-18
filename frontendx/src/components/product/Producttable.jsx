'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import axios from 'axios';
// import Editproduct from './Editproduct';
import AddNew from '../layput/AddNew';
import CreateProduct from './createproduct';
import EditProduct from './editproduct';

const Producttable = () => {
    const [products, setproducts] = useState([]);
    const [editproduct, seteditproduct] = useState(false)
    const [addnew, setaddnew] = useState(false)
    const [id, setid] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState(null)
    const [maincatagory, setmaincatagory] = useState('')
    const [subcatagory, setsubcatagory] = useState('')
    const [childcatagory, setchildcatagory] = useState('')
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        const products = () => {
            axios.get('http://localhost:8000/admin/product')
                .then((res) => setproducts(res.data));
        }
        products()
    });
    const onEdit = (rowData) => {
        setid(rowData._id)
        setname(rowData.name)
        setprice(rowData.price)
        setimage(rowData.image)
        setmaincatagory(rowData.maincatagory)
        setsubcatagory(rowData.subcatagory)
        setchildcatagory(rowData.childcatagory)
        seteditproduct(true)
    }
    const onDelete = async (rowData) => {
        confirmPopup({
            message: 'are you sure your want to delete',
            accept: async () => {
                await axios.post('http://localhost:8000/admin/deleteproduct',
                    { id: rowData._id }
                )
                setproducts(products.filter(u => u._id !== rowData._id));
            }
        });
    }

    return (
        <div className=" md:p-2 px-4 flex flex-col gap-5">
            <ConfirmPopup />

            <div className="text-2xl text-white">product Management</div>

            {/* 🔍 HEADER (inline but styled) */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 ">

                <Button
                    label="Clear"
                    icon="pi pi-filter-slash"
                    className="p-button-sm p-button-secondary"
                    onClick={() => {
                        setGlobalFilter('');
                        setFilters({
                            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
                        });
                    }}
                />
                <div className='flex gap-3'>
                    <InputText
                        value={globalFilter}
                        className=''
                        onChange={(e) => {
                            const value = e.target.value;
                            setGlobalFilter(value);
                            setFilters({
                                global: { value: value, matchMode: FilterMatchMode.CONTAINS }
                            });
                        }}
                        placeholder="Search..."
                        className="p-inputtext-sm"
                    />
                    <div onClick={() => { setaddnew(true) }} className='bg-indigo-700 px-3 flex items-center  rounded-lg text-white border-[1px] border-zinc-400 cursor-pointer'>Add new</div>

                </div>
            </div>

            <DataTable
                value={products}
                paginator
                rows={3}
                filters={filters}
                globalFilterFields={['name', 'price', 'image',"maincatagory","subcatagory","childcatagory"]}
                emptyMessage="No products found"
                className="dark-table products-table "
                size="small"
            >
                <Column
                header="Image"
                body={(rowData) => (
                    <img
                            src={`http://localhost:8000/images/${rowData.image}`}
                            className="bg-zinc-700 border-[1px]  border-zinc-600 h-18 w-18 p-1 rounded"
                            alt="product"
                        />
                )}
                sortable filter
                />

                <Column field="name" header="Name" sortable filter />
                <Column field="price" header="Price" sortable filter />
                <Column field="maincatagory" header="maincatagory" />
                <Column field="subcatagory" header="subcatagory" />
                <Column field="childcatagory" header="childcatagory" />

                {/* 🔥 SIMPLE + STYLED ACTIONS */}
                <Column
                    header="Actions"
                    body={(rowData) => (
                        <div className="flex gap-6">
                            <Button
                                icon="pi pi-pencil"
                                className="p-button-sm p-button-warning"
                                onClick={() => { onEdit(rowData) }}
                            />
                            <Button
                                icon="pi pi-trash"
                                className="p-button-sm p-button-danger"
                                onClick={() => {
                                    onDelete(rowData)
                                }}
                            />
                        </div>
                    )}
                />

            </DataTable>
            {editproduct && <EditProduct rowdataname={name} rowdataprice={price} rowdataimage={image} rowdatamaincatagory={maincatagory} rowdatasubcatagory={subcatagory} rowdatachildcatagory={childcatagory}  id={id} onClose={() => seteditproduct(false)} />}

            {addnew && <CreateProduct onClose={() => { setaddnew(false) }} />}
        </div>
    );
};

export default Producttable;
