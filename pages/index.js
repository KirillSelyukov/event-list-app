import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = ({ events }) => {
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}
export default HomePage;
