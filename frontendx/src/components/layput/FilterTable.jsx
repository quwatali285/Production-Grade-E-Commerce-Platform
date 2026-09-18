'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import axios from 'axios';
import EditUser from './EditUser';
import AddNew from './AddNew';

const FilterTable = () => {
    const [users, setUsers] = useState([]);
    const [edituser, setedituser] = useState(false)
    const [addnew, setaddnew] = useState(false)
    const [id, setid] = useState('')
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [globalFilter, setGlobalFilter] = useState('');
    
    useEffect(() => {
        const users=()=>{
            axios.get('http://localhost:8000/admin')
                .then((res) => setUsers(res.data));
        }
        users()
    });
    const onEdit=(rowData)=>{
       setid(rowData._id)
       setedituser(true)
    }
    const onDelete=async (rowData)=>{
        confirmPopup({
            message:'are you sure your want to delete',
            accept:async () => {
                await axios.post('http://localhost:8000/admin/delete',
                    {id:rowData._id}
                )
                 setUsers(users.filter(u => u._id !== rowData._id));
            }
        });
    }

    return (
        <div className="p-2 pl-4 flex flex-col gap-3">

            <ConfirmPopup />

            <div className="text-2xl text-white">
                User Management
            </div>

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">

                <Button
                    label="Clear"
                    icon="pi pi-filter-slash"
                    className="p-button-sm p-button-secondary w-full md:w-auto"
                    onClick={() => {
                        setGlobalFilter('');
                        setFilters({
                            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
                        });
                    }}
                />

                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">

                    <InputText
                        value={globalFilter}
                        onChange={(e) => {
                            const value = e.target.value;
                            setGlobalFilter(value);
                            setFilters({
                                global: { value, matchMode: FilterMatchMode.CONTAINS }
                            });
                        }}
                        placeholder="Search..."
                        className="p-inputtext-sm w-full sm:w-64"
                    />

                    <div
                        onClick={() => setaddnew(true)}
                        className="bg-indigo-700 px-3 py-2 flex items-center justify-center rounded-lg text-white border border-zinc-400 cursor-pointer w-full sm:w-auto"
                    >
                        Add new
                    </div>

                </div>
            </div>

            {/* 📱 MOBILE VIEW (412px PERFECT) */}
            <div className="block md:hidden space-y-3">

                {users.map((u) => (
                    <div key={u._id} className="bg-zinc-900 text-white p-4 rounded-lg shadow">

                        <div className="font-semibold text-lg">{u.name}</div>
                        <div className="text-sm text-gray-300">{u.email}</div>

                        <div className="text-sm mt-1">Role: {u.role}</div>
                        <div className="text-sm">Age: {u.age}</div>
                        <div className="text-sm">Gender: {u.gender}</div>

                        <div className="flex gap-2 mt-3 flex-wrap">


                            <Button
                                icon="pi pi-pencil"
                                className="p-button-sm p-button-warning"
                                onClick={() => onEdit(u)}
                            />

                            <Button
                                icon="pi pi-trash"
                                className="p-button-sm p-button-danger"
                                onClick={() => onDelete(u)}
                            />

                        </div>

                    </div>
                ))}

            </div>

            {/* 💻 DESKTOP VIEW (UNCHANGED DESIGN) */}
            <div className="hidden md:block w-full overflow-x-auto">

                <DataTable
                    value={users}
                    paginator
                    rows={5}
                    filters={filters}
                    globalFilterFields={['name', 'email', 'role']}
                    emptyMessage="No users found"
                    className="dark-table md:w-[77vw]"
                    size="small"
                >

                    <Column field="name" header="Name" sortable filter />
                    <Column field="email" header="Email" sortable filter />
                    <Column field="role" header="Role" sortable filter />
                    <Column field="dob" header="DOB" sortable />
                    <Column field="age" header="Age" sortable />
                    <Column field="gender" header="Gender" sortable />

                    <Column
                        header="Actions"
                        body={(rowData) => (
                            <div className="flex gap-2">
                                {/* <Button icon="pi pi-eye" className="p-button-sm p-button-info" /> */}
                                <Button icon="pi pi-pencil" className="p-button-sm p-button-warning" onClick={() => onEdit(rowData)} />
                                <Button icon="pi pi-trash" className="p-button-sm p-button-danger" onClick={() => onDelete(rowData)} />
                            </div>
                        )}
                    />

                </DataTable>

            </div>

            {edituser && <EditUser id={id} onClose={() => setedituser(false)} />}
            {addnew && <AddNew onClose={() => setaddnew(false)} />}

        </div>
    );
};

export default FilterTable;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { FilterMatchMode } from 'primereact/api';
// import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
// import axios from 'axios';
// import EditUser from './EditUser';
// import AddNew from './AddNew';

// const FilterTable = () => {
//     const [users, setUsers] = useState([]);
//     const [edituser, setedituser] = useState(false)
//     const [addnew, setaddnew] = useState(false)
//     const [id, setid] = useState('')
//     const [filters, setFilters] = useState({
//         global: { value: null, matchMode: FilterMatchMode.CONTAINS }
//     });
//     const [globalFilter, setGlobalFilter] = useState('');
    
//     useEffect(() => {
//         const users=()=>{
//             axios.get('http://localhost:8000/admin')
//                 .then((res) => setUsers(res.data));
//         }
//         users()
//     });
//     const onEdit=(rowData)=>{
//        setid(rowData._id)
//        setedituser(true)
//     }
//     const onDelete=async (rowData)=>{
//         confirmPopup({
//             message:'are you sure your want to delete',
//             accept:async () => {
//                 await axios.post('http://localhost:8000/admin/delete',
//                     {id:rowData._id}
//                 )
//                  setUsers(users.filter(u => u._id !== rowData._id));
//             }
//         });
//     }
    
//     return (
//         <div className="p-2 pl-4 flex flex-col gap-3">
//             <ConfirmPopup />

//             <div className="text-2xl text-white">User Management</div>

//             {/* 🔍 HEADER (inline but styled) */}
//             <div className="flex  not-landscape:flex-col not-landscape:justify-start not-landscape:items-start justify-between items-center gap-3">

//                 <Button
//                     label="Clear"
//                     icon="pi pi-filter-slash"
//                     className="p-button-sm p-button-secondary"
//                     onClick={() => {
//                         setGlobalFilter('');
//                         setFilters({
//                             global: { value: null, matchMode: FilterMatchMode.CONTAINS }
//                         });
//                     }}
//                 />
//                 <div className='flex gap-3'>
//                 <InputText
//                     value={globalFilter}
//                     className=''
//                     onChange={(e) => {
//                         const value = e.target.value;
//                         setGlobalFilter(value);
//                         setFilters({
//                             global: { value: value, matchMode: FilterMatchMode.CONTAINS }
//                         });
//                     }}
//                     placeholder="Search..."
//                     className="p-inputtext-sm"
//                 />
//                 <div  onClick={()=>{setaddnew(true)}} className='bg-indigo-700 px-3 flex items-center  rounded-lg text-white border-[1px] border-zinc-400 cursor-pointer'>Add new</div>

//                 </div>
//             </div>

//             <DataTable
//                 value={users}
//                 paginator
//                 rows={5}
//                 filters={filters}
//                 globalFilterFields={['name', 'email', 'role']}
//                 emptyMessage="No users found"
//                 className="dark-table  md:w-[77vw]"
//                 size="small"
//             >

//                 <Column field="name" header="Name" sortable filter />
//                 <Column field="email" header="Email" sortable filter />
//                 <Column field="role" header="Role" sortable filter />
//                 <Column field="dob" header="DOB" sortable />
//                 <Column field="age" header="Age" sortable />
//                 <Column field="gender" header="Gender" sortable />

//                 {/* 🔥 SIMPLE + STYLED ACTIONS */}
//                 <Column
//                     header="Actions"
//                     body={(rowData) => (
//                         <div className="flex gap-2">
//                             <Button
//                                 icon="pi pi-eye"
//                                 className="p-button-sm p-button-info"
//                                 onClick={() => console.log('View', rowData)}
//                             />
//                             <Button
//                                 icon="pi pi-pencil"
//                                 className="p-button-sm p-button-warning"
//                                 onClick={() => {onEdit(rowData)}}
//                             />
//                             <Button
//                                 icon="pi pi-trash"
//                                 className="p-button-sm p-button-danger"
//                                 onClick={()=>{onDelete(rowData)
//                                 }}
//                             />
//                         </div>
//                     )}
//                 />

//             </DataTable>
//             {edituser && <EditUser id={id} onClose={()=>setedituser(false)} />}
//             {addnew && <AddNew onClose={()=>{setaddnew(false)}}/>}
//         </div>
//     );
// };

// export default FilterTable;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { FilterMatchMode } from 'primereact/api';
// import axios from 'axios';

// const FilterTable = () => {
//     const [users, setUsers] = useState([]);
//     const [filters, setFilters] = useState({});
//     const [globalFilter, setGlobalFilter] = useState('');

//     useEffect(() => {
//         const user= async () => {
//             const data = await axios.get('http://localhost:8000/admin')
//             .then((res)=>{setUsers(res.data)})
//         }
//         user()
//         initFilters();
//     }, []);

//     const initFilters = () => {
//         setFilters({
//             global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//             name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//             email: { value: null, matchMode: FilterMatchMode.CONTAINS },
//             role: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
//         });

//         setGlobalFilter('');
//     };

//     const onGlobalFilterChange = (e) => {
//         const value = e.target.value;
//         let _filters = { ...filters };
//         _filters['global'].value = value;

//         setFilters(_filters);
//         setGlobalFilter(value);
//     };

//     const clearFilter = () => {
//         initFilters();
//     };

//     // Actions
//     const actionBodyTemplate = (rowData) => {
//         return (
//             <div className="flex gap-2">
//                 <Button icon="pi pi-eye" className="p-button-sm p-button-info" />
//                 <Button icon="pi pi-pencil" className="p-button-sm p-button-warning" />
//                 <Button onClick={()=>{console.log('User deleted successfully');
//                 }} icon="pi pi-trash" className="p-button-sm p-button-danger" />
//             </div>
//         );
//     };

//     // Header
//     const header = (
//         <div className="flex justify-between items-center gap-3">
//             <Button
//                 label="Clear"
//                 icon="pi pi-filter-slash"
//                 onClick={clearFilter}
//                 className="p-button-sm p-button-secondary"
//             />

//             <InputText
//                 value={globalFilter}
//                 onChange={onGlobalFilterChange}
//                 placeholder="Search..."
//                 className="p-inputtext-sm"
//             />
//         </div>
//     );

//     return (
//         <div className="p-2 flex flex-col gap-3">
//             <div className='text-2xl text-white'>User Management</div>
//             <DataTable
                
//                 value={users}
//                 paginator
//                 rows={5}
//                 dataKey="id"
//                 filters={filters}
//                 filterDisplay="menu"
//                 globalFilter={globalFilter}
//                 header={header}
//                 emptyMessage="No users found"
//                 className='dark-table'
//             >
//                 <Column field="name" header="Name" sortable filter />
//                 <Column field="email" header="Email" sortable filter />
//                 <Column field="role" header="Role" sortable filter />
//                 <Column field="dob" header="DOB" sortable />
//                 <Column field="age" header="Age" sortable />
//                 <Column field="gender" header="Gender" sortable />
//                 <Column header="Actions" body={actionBodyTemplate} />
//             </DataTable>

//         </div>
//     );
// };

// export default FilterTable;