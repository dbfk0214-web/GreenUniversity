import React from "react";

const MyInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">내 정보</h1>

      {/* 기본 정보 */}
      <section className="rounded-lg border bg-white p-4">
        <h3 className="mb-3 font-semibold text-gray-700">기본 정보</h3>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="이름" value="김유라" />
          <InfoItem label="역할" value="학생" />
          <InfoItem label="학번" value="202312345" />
          <InfoItem label="소속" value="컴퓨터공학과" />
        </div>
      </section>

      {/* 계정 정보 */}
      <section className="rounded-lg border bg-white p-4">
        <h3 className="mb-3 font-semibold text-gray-700">계정 정보</h3>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="이메일" value="youra@email.com" />
          <InfoItem label="계정 상태" value="활성" />
          <InfoItem label="가입일" value="2024-03-01" />
          <InfoItem label="마지막 로그인" value="2025-03-22 14:20" />
        </div>
      </section>
    </div>
  );
};

function InfoItem({ label, value }) {
  return (
    <div>
      <span className="text-sm text-gray-500">{label}</span>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
}

export default MyInfo;
