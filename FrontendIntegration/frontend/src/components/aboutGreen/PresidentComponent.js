import React, { useEffect, useState } from "react";
import jsonData from "../../slice/president_profile.json";

const PresidentComponent = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    setProfileData(jsonData);
  }, []);

  if (!profileData) {
    return <div className="p-8 text-center">데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 pb-4 border-b-2 border-gray-200">
        {profileData.pageTitle}
      </h1>

      <section className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/3 flex-shrink-0 text-center lg:text-left">
          <img
            src={profileData.presidentInfo.imageUrl}
            alt={profileData.presidentInfo.name}
            className="w-full max-w-sm mx-auto rounded-lg shadow-xl object-cover"
          />
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {profileData.presidentInfo.name}
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              {profileData.presidentInfo.title}
            </p>
          </div>
        </div>
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {profileData.greeting.title}
          </h3>
          <div className="space-y-6 text-gray-700 leading-relaxed text-base">
            {profileData.greeting.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="text-right mt-10 text-xl font-semibold text-gray-800">
            {profileData.greeting.signature}
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-10 pb-4 border-b-2 border-gray-200">
          {profileData.profile.title}
        </h2>
        <div className="space-y-12">
          {profileData.profile.sections.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-bold text-blue-700 mb-6 border-l-4 border-blue-700 pl-4">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row text-base md:text-lg"
                  >
                    <span className="w-full md:w-48 font-medium text-gray-600 mb-1 md:mb-0">
                      {item.date || item.dateRange}
                    </span>
                    <span className="flex-1 text-gray-800">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PresidentComponent;
