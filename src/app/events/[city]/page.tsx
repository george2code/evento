import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import React, { Suspense } from 'react'
import Loading from './loading';
import { capitalize } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({params}: Props) {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`
  }
}

// Zod validation rule
const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  // const page = searchParams.page || 1;  // || - if undefined (or empty, or 0) set 1

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        { city === 'all' && 'All Events'}
         { city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>

      {/* if city or page changes, suspense work because unique key is changed */}
      <Suspense key={ city + parsedPage.data } fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
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