import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { EventoEvent } from '@/lib/types';
import React from 'react'

type EventsPageProps = {
  params: {
    city: string;
  }
}

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();



  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        { city === 'all' && 'All Events'}
         { city !== 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  )
}


  // {
  //   id: 11,
  //   name: 'Comedy Extravaganza',
  //   slug: 'comedy-extravaganza',
  //   city: 'Austin',
  //   location: 'Austin Laugh Factory',
  //   date: '2030-11-06T00:00:00.000Z',
  //   organizerName: 'Laugh Productions',
  //   imageUrl: 'https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100',
  //   description: 'Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!'
  // },