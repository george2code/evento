import "server-only";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";


export const getEvents = unstable_cache(async (city: string, page = 1) => {   // default page value is 1
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventEvento[] = await response.json();

  const events = await prisma.eventEvento.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),  // if undefined, return all
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === 'all') {
    totalCount = await prisma.eventEvento.count();
  } else {
    totalCount = await prisma.eventEvento.count({
      where: {
        city: city === 'all' ? undefined : capitalize(city),
      },
    });
  }

  return {events, totalCount};
});


export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventEvento = await response.json();

  const event = await prisma.eventEvento.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});