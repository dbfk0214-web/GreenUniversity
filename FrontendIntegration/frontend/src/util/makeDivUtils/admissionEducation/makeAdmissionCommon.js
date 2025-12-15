// // 학과섹션 입니다.
// const makeCollegeSection = (
//   imageUrl,
//   title,
//   description,
//   location,
//   phone,
//   rows = [],
//   columns = []
// ) => {
//   return (
//     <>
//       <div>
//         {/* 이미지 */}
//         <div>
//           <img src={imageUrl} alt="이미지가 없읍니다." />
//         </div>

//         {/* 설명 섹션 */}
//         <div style={{ display: "flex" }}>
//           <div>{title}</div>
//           <div>
//             {/* 요약 */}
//             <div>{description}</div>
//             {/* 정보 */}
//             <div>
//               {location} | {phone}
//             </div>
//           </div>
//         </div>

//         {/* 카드들 */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//           }}
//         >
//           {rows.map((row) => (
//             <div style={{ border: "1px solid #ccc" }}>
//               {/* 0번의 경우 특별한 처리 */}
//               <div style={{ display: "flex" }}>
//                 <div>{row[columns[0]]}</div>
//                 <div>
//                   <button>버튼</button>
//                 </div>
//               </div>

//               {/* 0번을 제외한 column만 처리 */}
//               <div style={{ display: "flex" }}>
//                 {columns.slice(1).map((col, idx) => (
//                   <div>{row[col]}</div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export { makeCollegeSection };
