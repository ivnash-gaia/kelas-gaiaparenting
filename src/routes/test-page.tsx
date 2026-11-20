import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { EVENT } from "@/lib/event-data";

export const Route = createFileRoute("/test-page")({
  component: () => <EventPage event={EVENT} />,
});