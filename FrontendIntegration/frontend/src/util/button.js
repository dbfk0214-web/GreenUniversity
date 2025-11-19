export const createButton = ({ label, style, onClick }) => (
  <button
    onClick={onClick}
    className={`w-[90%] text-white font-semibold py-2 rounded-lg transition ${style}`}
  >
    {label}
  </button>
);
