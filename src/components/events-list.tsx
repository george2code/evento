// import { EventoEvent } from '@/lib/types'
import { EventEvento } from '@prisma/client';
import React from 'react'
import EventCard from './event-card';
import { getEvents } from '@/lib/server-utils';
import PaginationControls from './pagination-controls';

type EvetsListProps = {
    city: string;
    page?: number;
};

export default async function EventsList({ city, page = 1 }: EvetsListProps) {

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

  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath =  totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : '';

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {
        events.map((event) => (
            <EventCard key={event.id} event={event} />
        ))
      }

      <PaginationControls previousPath={previousPath} nextPath={nextPath}></PaginationControls>
    </section>
  );
}
 