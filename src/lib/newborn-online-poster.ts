// Poster for "Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula" (online, master page).
// Lives in public/og/ so the same file serves the class page, the directory card and the link
// preview. Same pattern as couple-yoga-poster.ts. The poster carries no dates or prices, so it
// stays valid for every run of the class.
const newbornOnlinePoster = {
  url: "/og/newborn-online-poster.jpg",
  // Same poster on a 16:9 canvas (extra background above and below) for the directory card, which
  // crops to 16:9. Without it the "ONLINE" pill on the right edge gets cut off.
  cardUrl: "/og/newborn-online-card.jpg",
  absoluteUrl: "https://kelas.gaiaparenting.com/og/newborn-online-poster.jpg",
};
export default newbornOnlinePoster;
