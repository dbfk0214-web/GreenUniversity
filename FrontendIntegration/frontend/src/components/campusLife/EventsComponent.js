import Event from "../../json/campusLife/event.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const EventsComponent = () => {
  return (
    <div>
      EventComponent
      {Event && recursiveRender(Event)}
    </div>
  );
};

export default EventsComponent;
