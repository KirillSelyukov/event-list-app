import Link from "next/link";
import classes from "./event-item.module.css";

const EventItem = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = event.location.replace(", ", "\n");
  const exloreLink = `/events/${event.id}`;
  return (
    <li className={classes.item}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exloreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
