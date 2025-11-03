
export default function Header({ subHeader }) {


  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto w-[95%] flex items-center justify-between py-3">
        {/* 좌측 타이틀 */}
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-gray-800">놀라라</h1>
        </div>
      </div>
    </header>
  );
}
