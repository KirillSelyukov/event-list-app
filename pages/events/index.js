import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = ({ events }) => {
  const router = useRouter();
  const findEventsHandler = (month, year) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
      <NewsletterRegistration />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
