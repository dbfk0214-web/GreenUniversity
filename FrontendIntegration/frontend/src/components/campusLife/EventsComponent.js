import Event from "../../json/campusLife/event.json";
import { makeEventCard } from "../../util/makeDivUtils/campusLife/makeEvent";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";

const EventsComponent = () => {
  var eventDataArray = [];
  return (
    <div>
      <div>
        {Event.map((event) => (
          <>
            {!eventDataArray.includes(event.period) &&
              eventDataArray.push(event.period) && (
                <div>{makeSectionTitle(event.period)}</div>
              )}
            <div style={{ width: "50%" }}>
              {makeEventCard(
                event.image,
                event.status,
                event.period,
                event.title,
                event.location,
                event.department,
                event.category,
                event.format
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
