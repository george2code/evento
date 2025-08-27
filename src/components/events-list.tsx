import { EventoEvent } from '@/lib/types'
import React from 'react'
import EventCard from './event-card';
import { getEvents, sleep } from '@/lib/utils';

type EvetsListProps = {
    city: string;
};

export default async function EventsList({ city }: EvetsListProps) {

  // await sleep(2000);

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
  //     // cache: "no-cache",
  //     next: {
  //       revalidate: 300,
  //     }
  //   }
  // );
  // const events: EventoEvent[] = await response.json();

  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {
        events.map((event) => (
            <EventCard key={event.id} event={event} />
        ))
      }
    </section>
  );
}
 