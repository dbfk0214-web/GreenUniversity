import React from "react";

const AdminSummary = ({ terms, courses, timetables }) => {
  const InfoCard = ({ title, link, items, render, empty }) => (
    <div className="bg-white border rounded-2xl p-5">
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="space-y-2 text-xs text-gray-600">
        {items.slice(0, 3).map((v, i) => (
          <div key={i} className="bg-gray-50 p-2 rounded">
            • {render(v)}
          </div>
        ))}
        {items.length === 0 && <p className="text-gray-400">{empty}</p>}
      </div>
    </div>
  );

  return (
    <>
      <InfoCard
        title="📅 학기"
        items={terms}
        empty="학기 없음"
        render={(t) => `${t.year}년 ${t.semester}`}
      />
      <InfoCard
        title="📚 강의"
        items={courses}
        empty="강의 없음"
        render={(c) => c.courseName}
      />
      <InfoCard
        title="🕐 시간표"
        items={timetables}
        empty="시간표 없음"
        render={(tt) => `${tt.dayOfWeek} ${tt.startTime}~${tt.endTime}`}
      />
    </>
  );
};

export default AdminSummary;
