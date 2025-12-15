// const makeSimpleTableA = (rows = [], columns = []) => {
//   return (
//     <div style={{ border: "1px solid #ccc" }}>
//       {/* Header */}
//       <div style={{ display: "flex", border: "1px solid #ccc" }}>
//         {columns.map((column) => (
//           <div key={column} style={{ flex: 1, border: "1px solid #ccc" }}>
//             {column}
//           </div>
//         ))}
//       </div>

//       {/* Body */}
//       <div>
//         {rows.map((row, idx) => (
//           <div key={idx} style={{ display: "flex", border: "1px solid #ccc" }}>
//             {columns.map((column) => (
//               <div key={column} style={{ flex: 1, border: "1px solid #ccc" }}>
//                 {row[column]}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export { makeSimpleTableA };
