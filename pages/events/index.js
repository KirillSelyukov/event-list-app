import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (month, year) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export default AllEventsPage;
