// import React, { useEffect, useRef } from "react";
// import collegeImg from "../images/2.jpg";// 실제 경로로 수정

// export default function WatercolorCollege() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const img = new Image();
//     img.src = collegeImg;

//     img.onload = () => {
//       const width = img.width;
//       const height = img.height;

//       // 캔버스 크기를 이미지와 동일하게 맞춤
//       canvas.width = width;
//       canvas.height = height;
// // 
//       // 브러시(사각형) 크기 지정 (값 줄이면 더 세밀하게, 키우면 거칠게)
//       const brushSize = 40;

//       // 그릴 좌표 목록을 미리 만들고 섞기
//       const cells = [];
//       for (let y = 0; y < height; y += brushSize) {
//         for (let x = 0; x < width; x += brushSize) {
//           cells.push({ x, y });
//         }
//       }

//       // 왼쪽 상단부터 → 대각선 순서 느낌으로 정렬
//       cells.sort((a, b) => (a.x + a.y) - (b.x + b.y));

//       // 수채화 느낌용 설정
//       ctx.globalAlpha = 0.5; // 살짝 투명하게
//       ctx.imageSmoothingEnabled = true;

//       let index = 0;
//       const total = cells.length;

//       function drawStep() {
//         // 한 프레임에 여러 개 stroke를 그려주면 더 빠르게 완성됨
//         const strokesPerFrame = 8;

//         for (let i = 0; i < strokesPerFrame && index < total; i++) {
//           const cell = cells[index];
//           const { x, y } = cell;

//           // 약간 랜덤하게 살짝 위치/크기 변형 → 붓질 느낌
//           const offsetX = x + (Math.random() - 0.5) * (brushSize * 0.3);
//           const offsetY = y + (Math.random() - 0.5) * (brushSize * 0.3);
//           const w = brushSize * (0.8 + Math.random() * 0.6);
//           const h = brushSize * (0.8 + Math.random() * 0.6);

//           ctx.drawImage(
//             img,
//             x, // source x
//             y, // source y
//             brushSize,
//             brushSize,
//             offsetX,
//             offsetY,
//             w,
//             h
//           );

//           index++;
//         }

//         if (index < total) {
//           requestAnimationFrame(drawStep);
//         } else {
//           // 마지막에는 불투명하게 전체 한 번 더 그려서 디테일 살리기
//           ctx.globalAlpha = 1;
//           ctx.drawImage(img, 0, 0, width, height);
//         }
//       }

//       // 배경을 흰색으로 한번 깔고 시작 (수채화 종이 느낌)
//       ctx.fillStyle = "#f8fafc";
//       ctx.fillRect(0, 0, width, height);

//       requestAnimationFrame(drawStep);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-full h-full bg-slate-100">
//       <canvas
//         ref={canvasRef}
//         className="shadow-xl rounded-xl border border-slate-200"
//       />
//     </div>
//   );
// }
