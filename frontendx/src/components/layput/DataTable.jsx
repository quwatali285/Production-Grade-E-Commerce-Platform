// const DataTable = ({
//   columns,
//   data,
//   renderRow,
//   loading,
//   emptyText = "No data found",
// }) => {
//   return (
//     <div className="overflow-x-auto rounded-lg border  border-zinc-700">

//       <table className="  border-collapse w-full">

//         {/* HEADER */}
//         <thead className="bg-zinc-800 border-[1px] border-zinc-200 ">
//           <tr >
//             {columns.map((col, i) => (
//               <th
//                 key={i}
//                 className="text-left px-4 py-3 text-sm font-semibold border-[1px] border-zinc-200"
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         {/* BODY */}
//         <tbody >

//           {loading ? (
//             <tr>
//               <td
//                 colSpan={columns.length}
//                 className="text-center py-6 text-gray-400"
//               >
//                 Loading...
//               </td>
//             </tr>
//           ) : data?.length ? (
//             data.map(renderRow)
//           ) : (
//             <tr>
//               <td
//                 colSpan={columns.length}
//                 className="text-center py-6 text-gray-400"
//               >
//                 {emptyText}
//               </td>
//             </tr>
//           )}

//         </tbody>

//       </table>
//     </div>
//   );
// };

// export default DataTable;

const DataTable = ({
  columns,
  data,
  renderRow,
  loading,
  emptyText = "No data found",
}) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-700">

      {/* HEADER */}
      <div className="grid bg-zinc-800 border-b border-zinc-700"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className="px-4 py-3 text-left text-sm font-semibold border-r border-zinc-700 last:border-r-0"
          >
            {col}
          </div>
        ))}
      </div>

      {/* BODY */}
      <div className="flex flex-col">

        {loading ? (
          <div className="text-center py-6 text-gray-400 border-b border-zinc-700">
            Loading...
          </div>
        ) : data?.length ? (
          data.map((item, index) => (
            <div
              key={item._id || index}
              className="grid border-b border-zinc-700 hover:bg-zinc-800"
              style={{
                gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
              }}
            >
              {renderRow(item)}
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-400">
            {emptyText}
          </div>
        )}

      </div>
    </div>
  );
};

export default DataTable;