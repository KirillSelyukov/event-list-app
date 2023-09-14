import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const events = getFeaturedEvents();
  return (
    <div>
      <ul>
        <EventList events={events} />
      </ul>
    </div>
  );
};

export default HomePage;
