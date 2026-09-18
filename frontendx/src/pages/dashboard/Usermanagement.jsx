// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { Pencil, Trash2 } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EditUser from "../../components/layput/EditUser";
// import AddNew from "../../components/layput/AddNew";

// const Usermanagement = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [selecteduser, setselecteduser] = useState(null);
//   const [addnew, setaddnew] = useState(false)
//   const [edit, setedit] = useState(false);

//   const perPage = 6;

//   const columns = ["Name", "Email", "Role",'Action'];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);

//         const res = await axios.get("http://localhost:8000/admin");

//         const data = Array.isArray(res.data)
//           ? res.data
//           : res.data?.users || [];

//         setUsers(data);
//       } catch (err) {
//         console.log(err);
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const deleteUser = async (id) => {
//     await axios.post("http://localhost:8000/admin/delete", { id });
//     toast.success("User deleted successfully");
//     setUsers((prev) => prev.filter((u) => u._id !== id));
//   };

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     return users.filter((u) => {
//       if (!q) return true;

//       return (
//         u?.name?.toLowerCase().includes(q) ||
//         u?.email?.toLowerCase().includes(q) ||
//         u?.role?.toLowerCase().includes(q)
//       );
//     });
//   }, [users, search]);

//   const start = (page - 1) * perPage;
//   const paginated = filtered.slice(start, start + perPage);
//   const totalPages = Math.ceil(filtered.length / perPage);

//   return (
//     <div className="text-white w-[90%] flex flex-col gap-3 px-4">

//       <ToastContainer />

//       {/* TITLE */}
//       <div className="text-3xl">User Management</div>

//       <div className="flex w-full justify-between items-center">
//       {/* SEARCH */}
//       <input
//         className="p-2 border w-[30%] outline-none border-zinc-500 bg-zinc-800"
//         placeholder="Search user..."
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setPage(1);
//         }}
//       />
//       <div onClick={()=>{setaddnew(true)}}  className="px-5 py-2 rounded-lg bg-rose-500 cursor-pointer">Add new</div>
//       </div>

//       {/* GRID HEADER */}
//       <div
//         className="grid bg-zinc-800 border border-zinc-500"
//         style={{
//           gridTemplateColumns: '2fr 3fr 1fr 2fr' //"repeat(5, minmax(0, 1fr))"//,
//         }}
//       >
//         {columns.map((col, i) => (
//           <div
//             key={i}
//             className="px-4 py-3 font-semibold border-r border-zinc-500 last:border-r-0"
//           >
//             {col}
//           </div>
//         ))}
//       </div>

//       {/* GRID BODY */}
//       <div className="flex flex-col border border-zinc-500">

//         {loading ? (
//           <div className="p-4 text-center text-gray-400">
//             Loading...
//           </div>
//         ) : paginated.length ? (
//           paginated.map((item) => (
//             <div
//               key={item._id}
//               className="grid border-b border-zinc-500 hover:bg-zinc-800"
//               style={{
//                 gridTemplateColumns: '2fr 3fr 1fr 1fr 1fr' //"repeat(5, minmax(0, 1fr))"//,
//               }}
//             >
//               {/* NAME */}
//               <div className="px-4 py-2 border-r border-zinc-500">
//                 {item?.name}
//               </div>

//               {/* EMAIL */}
//               <div className="px-4 py-2 border-r border-zinc-500">
//                 {item?.email}
//               </div>

//               {/* ROLE */}
//               <div className="px-4 py-2 border-r border-zinc-500">
//                 {item?.role}
//               </div>

//               {/* EDIT */}
//               <div className="px-4 py-2 border-r border-zinc-500 text-blue-500">
//                 <Pencil
//                   className="cursor-pointer"
//                   size={18}
//                   onClick={() => {
//                     setselecteduser(item);
//                     setedit(true);
//                   }}
//                 />
//               </div>

//               {/* DELETE */}
//               <div
//                 className="px-4 py-2 text-red-500 cursor-pointer"
//                 onClick={() => deleteUser(item._id)}
//               >
//                 <Trash2 size={18} />
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="p-4 text-center text-gray-400">
//             No users found
//           </div>
//         )}
//       </div>

//       {/* PAGINATION */}
//       <div className="flex gap-2 mt-3">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => setPage(i + 1)}
//             className={`px-3 py-1 border ${
//               page === i + 1 ? "bg-pink-500" : "bg-zinc-700"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>

//       {/* Add New User MODAL */}
//       {addnew && <AddNew addnew={addnew} setaddnew={setaddnew} />}

//       {/* EDIT MODAL */}
//       {edit && <EditUser user={selecteduser} />}
//     </div>
//   );
// };

// export default Usermanagement;


import React from 'react'
import FilterTable from "../../components/layput/FilterTable";
const Usermanagement = () => {
  return (
    <div> <FilterTable/> </div>
  )
}

export default Usermanagement