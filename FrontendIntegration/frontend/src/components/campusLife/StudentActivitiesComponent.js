import React from "react";
import StudentActivities from "../../json/campusLife/student_activities.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const StudentActivitiesComponent = () => {
  return (
    <div>
      StudentActivitiesComponent
      {StudentActivities && recursiveRender(StudentActivities)}
    </div>
  );
};

export default StudentActivitiesComponent;
