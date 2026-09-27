// Single source of truth for real club facts, so every component
// (nav, footer, CTAs) stays in sync with one place to edit.

export const CLUB = {
  name: "KBC Badminton",
  suburb: "Camellia, NSW",
  addressLines: ["Unit 7, 175–179 James Ruse Drive", "Camellia, NSW 2142"],
  email: "admin@kbcnsw.com.au",
  wechat: "ooiyanteong1968",
  parkingNote:
    "Please park only in the bay allocated to Unit 7 — other bays belong to neighbouring units.",
};

// Official club crest. White background (no transparency), so the header
// mounts it on a white badge tile rather than directly on charcoal.
export const LOGO = {
  src: `${import.meta.env.BASE_URL}brand/kbc-logo.png`,
  width: 512,
  height: 413,
  alt: "KBC NSW Australia badminton club logo",
};

const ADDRESS_QUERY = "Unit 7, 175-179 James Ruse Drive, Camellia NSW 2142";

export const LINKS = {
  booking: "https://kbcnsw.yepbooking.com.au",
  membershipForm:
    "https://www.kbcbadminton.com.au/wp-content/uploads/2025/12/2026-KBC-Badminton-membership-form.pdf",
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`,
  // Classic key-less Google Maps embed — no API key/billing needed.
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&output=embed`,
  email: "mailto:admin@kbcnsw.com.au",
};

export const NAV_LINKS = [
  { href: "#club", label: "The Club" },
  { href: "#sessions", label: "Sessions" },
  { href: "#membership", label: "Membership" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export const TICKER_ITEMS = [
  { label: "Mon", detail: "10am–1pm & 8–11pm" },
  { label: "Thu", detail: "10am–1pm & 8–11pm" },
  { label: "Sat", detail: "2–6pm" },
  { label: "Sun", detail: "3–6pm" },
  { label: "Members $18", detail: "· Guests $22" },
];

export const STATS = [
  { value: "4", label: "Sessions every week" },
  { value: "$18", label: "Member rate / session" },
  { value: "$22", label: "Guest rate / session" },
  { value: "2026", label: "Membership now open" },
];

export const FEATURES = [
  {
    title: "Social and training, same club",
    body: "Daytime sessions lean social; Monday and Thursday evenings run faster, more competitive games.",
  },
  {
    title: "Members and guests both welcome",
    body: "Turn up as a guest for $22 a session, or lock in the member rate of $18 with 2026 membership.",
  },
  {
    title: "One court, every week",
    body: "Every session runs from the same Camellia facility — familiar courts, familiar faces, no chasing venues.",
  },
];

export const TIMETABLE = [
  { day: "Monday", session: "Morning social", time: "10:00am – 1:00pm" },
  { day: "Monday", session: "Evening", time: "8:00pm – 11:00pm" },
  { day: "Thursday", session: "Morning social", time: "10:00am – 1:00pm" },
  { day: "Thursday", session: "Evening", time: "8:00pm – 11:00pm" },
  { day: "Saturday", session: "Afternoon", time: "2:00pm – 6:00pm" },
  { day: "Sunday", session: "Afternoon", time: "3:00pm – 6:00pm" },
];

export const PRICING = [
  {
    who: "Member",
    note: "2026 membership holders",
    amount: "$18",
    highlight: true,
  },
  { who: "Guest", note: "Casual, pay as you play", amount: "$22" },
];

export const FOOTER_PLAY_LINKS = [
  { href: LINKS.booking, label: "Book a court", external: true },
  { href: LINKS.membershipForm, label: "Membership form", external: true },
];

// Action photography for the split-screen banners. Drop images into
// public/shots/ and set `src` (e.g. `${import.meta.env.BASE_URL}shots/smash.jpg`
// — the BASE_URL prefix keeps it working on GitHub Pages). While `src` is
// null — or if the file fails to load — each banner falls back to its
// animated court graphic, so the layout never shows a broken image.
export const ACTION_SHOTS = {
  hero: { src: null, alt: "KBC player mid-smash on the Camellia court" },
  membership: { src: null, alt: "Doubles rally at a KBC evening session" },
};

// Club group photo for the Crew section — shown in full colour (no
// duotone) so members' faces read naturally.
export const GROUP_PHOTO = {
  src: `${import.meta.env.BASE_URL}shots/members-group.jpg`,
  width: 1702,
  height: 1276,
  alt: "KBC NSW Badminton Club members and guests gathered in front of the club banner at the Camellia hall",
  caption: "Club night · Camellia",
  date: "Oct 2022",
};
