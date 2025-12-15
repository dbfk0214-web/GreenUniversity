// const makeContactCard = (data = {}, columns = [], title = "Empty") => {
//   return (
//     <div style={{ border: "1px solid #ccc" }}>
//       {/* Title 출력 */}
//       <h2>{data[title]}</h2>

//       {/* 나머지 필드 반복 출력 */}
//       <div>
//         {columns.map((col) => (
//           <div key={col} style={{ border: "1px solid #ccc" }}>
//             {data[col]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const makeIntroSection = (title, description, backgroundImage) => {
//   return (
//     <div style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <h1 className="intro-title">{title}</h1>
//       <p className="intro-description">{description}</p>
//     </div>
//   );
// };

// const makeSimpleTableB = (rows = [], columns = [], title = "") => {
//   return (
//     <div style={{ border: "1px solid #ccc" }}>
//       {/* Title */}
//       <h1>{title}</h1>

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

// const makeGuideGrid = (items = [], title = "Empty") => {
//   return (
//     <div style={{ border: "1px solid #ccc" }}>
//       <h3>{title}</h3>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//         {items.map((item, idx) => (
//           <div key={idx}>{item.label}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const makeBottomButtons = (buttons = []) => {
//   return (
//     <div style={{ border: "1px solid #ccc" }}>
//       {buttons.map((btn, idx) => (
//         <a key={idx} href={btn.link} style={{ border: "1px solid #ccc" }}>
//           {btn.label}
//         </a>
//       ))}
//     </div>
//   );
// };

// export {
//   makeContactCard,
//   makeIntroSection,
//   makeSimpleTableB,
//   makeGuideGrid,
//   makeBottomButtons,
// };
