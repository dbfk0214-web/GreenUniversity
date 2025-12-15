// import { makeDefaultHeader, makeDefaultTableBody } from "../makeCommonTable";

// // 공통적으로 사용할 테이블A 양식입니다.
// const makeDefaultTable = (headers = [], rows = [], columns = []) => {
//   return (
//     <>
//       <table style={{ border: "1px solid #ccc" }}>
//         <thead>{makeDefaultHeader(headers)}</thead>
//         <tbody>{makeDefaultTableBody(rows, columns)}</tbody>
//       </table>
//     </>
//   );
// };

// // 기본적인 이미지 섹션입니다.
// const makeDefaultImageSection = (
//   backgroundImage,
//   title = "none",
//   contents = []
// ) => {
//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           minHeight: "200px",
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <div style={{ marginTop: "50px" }}>
//           <h2
//             style={{
//               fontSize: "24px",
//             }}
//           >
//             {title}
//           </h2>
//           <div>
//             {contents.map((content) => (
//               <div
//                 style={{
//                   fontSize: "20px",
//                   color: "orange",
//                   marginBottom: "24px",
//                   fontFamily: "bold",
//                 }}
//               >
//                 {content}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const makeDefaultSentence = (contents = [], title = "") => {
//   return (
//     <>
//       <div>
//         {/* 제목 */}
//         {title && (
//           <div
//             style={{ fontSize: "20px", fontWeight: "700", color: "#1d4ed8" }}
//           >
//             {title}
//           </div>
//         )}

//         {/* 내용들 */}
//         <div style={{ marginBottom: "24px" }}>
//           {contents.map((content) => (
//             <div style={{ marginBottom: "10px" }}>{content}</div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// const makeSentenceImageSectionA = (imageUrl, title = "", contents = []) => {
//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <div>
//           <img src={imageUrl} alt="" style={{ width: "48%" }} />
//         </div>

//         <div>
//           {/* 제목 */}
//           {title && (
//             <div
//               style={{ fontSize: "20px", fontWeight: "700", color: "#1d4ed8" }}
//             >
//               {title}
//             </div>
//           )}

//           {/* 내용들 */}
//           <div style={{ marginBottom: "24px" }}>
//             {contents.map((content) => (
//               <div style={{ marginBottom: "10px" }}>{content}</div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const makeSentenceImageSectionB = (imageUrl, title = "", contents = []) => {
//   return (
//     <>
//       <div>
//         <div>
//           <img src={imageUrl} alt="" style={{ width: "100%" }} />
//         </div>
//         <div>{makeDefaultSentence(contents, title)}</div>
//       </div>
//     </>
//   );
// };

// export {
//   makeDefaultHeader,
//   makeDefaultTable,
//   makeDefaultImageSection,
//   makeDefaultSentence,
//   makeSentenceImageSectionA,
//   makeSentenceImageSectionB,
// };
