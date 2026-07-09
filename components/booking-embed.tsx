const DEFAULT_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lnFVDVF4oKIzE6ZHDeeyE7cLSIGsE79nUYZPvsPWxz8a6Do7nJDVXq1uwyqJVtig3pMaB3tg7?gv=true";

export function BookingEmbed() {
  const src =
    process.env.NEXT_PUBLIC_BOOKING_EMBED_URL?.trim() || DEFAULT_BOOKING_URL;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-border bg-white">
      <iframe
        title="Book a call"
        src={src}
        className="h-[600px] w-full border-0 bg-white"
        loading="lazy"
      />
    </div>
  );
}
