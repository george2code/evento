import H1 from '@/components/h1';
import React from 'react'

type EventsPageProps = {
  params: {
    city: string;
  }
}

export default function EventsPage({ params }: EventsPageProps) {

  const city = params.city;

  return (
    <main>
      <H1>
        { city === 'all' && 'All Events'}
         { city !== 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  )
}
