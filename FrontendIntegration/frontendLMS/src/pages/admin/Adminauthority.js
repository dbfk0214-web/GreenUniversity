import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div style={{ marginLeft: "16px" }}>
      {/* 1단 메뉴 */}
      <div className="font-semibold">{item.label}</div>

      {/* children이 있으면 반복 렌더링 */}
      {item.children && (
        <div style={{ marginLeft: "12px", marginTop: "4px" }}>
          {item.children.map((child, idx) => (
            <MenuItem key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const AdminNoticeMenu = ({ menu }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{menu.label}</h2>

      {/* 하위 children 렌더링 */}
      {menu.children?.map((child, idx) => (
        <MenuItem key={idx} item={child} />
      ))}
    </div>
  );
};

export default AdminNoticeMenu;
