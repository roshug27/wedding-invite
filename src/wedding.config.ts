/**
 * ============================================================
 *  YOUR WEDDING DETAILS
 * ============================================================
 *  This is the ONLY file you need to change to make the website yours.
 *
 *  Rules for editing by hand:
 *   - Only change the text inside the quotes "like this".
 *   - Keep every quote mark, comma and bracket where it is.
 *   - Photos, video and music go in the "public" folder. Then write
 *     their path here starting with a slash, for example "/images/couple.jpg".
 *   - To hide something optional, set it to "" (empty quotes).
 *
 *  Easier option: ask Claude to do it for you. See GUIDE.md.
 * ============================================================
 */

export const wedding = {
  // ---------- The couple ----------
  couple: {
    partner1: "Ashish",
    partner2: "Nidhi",
  },

  // ---------- Date ----------
  // Short date shown on the big welcome screen and in the footer.
  date: "December 2, 2026",
  // Full date shown above the timeline.
  dateWithDay: "Wednesday, December 2, 2026",

  // ---------- Welcome screen (top of the page) ----------
  hero: {
    // A small blessing or greeting shown above your names. Use "" to hide it.
    blessing:
      "Ishwar kare aapka vivahik jeevan mazboot, aanandmay aur dheron khushiyon se paripurna ho.",
    // A short quote shown below the date. Use "" to hide it.
    quote:
      "आपको भगवान शिव और पार्वती माँ के मार्गदर्शन से प्राप्त, शक्ति, सद्भाव और शाश्वत प्रेम से भरपूर विवाह की शुभकामनाएँ।",
    // Background video (MP4, under 5 MB is best). Use "" to show the image below instead.
    video: "",
    // Background image, used when there is no video.
    image: "/images/hero.svg",
  },

  // ---------- Logo (top left corner) ----------
  // Use "" to show the couple's initials automatically.
  logo: "",

  // ---------- Events timeline ----------
  // Add or remove events by copying or deleting a whole { ... } block.
  // The "time" line can hold a date instead, for example "November 30, 2026".
  events: [
    {
      name: "Engagement Ceremony",
      time: "November 24, 2026",
      description: "",
      image: "/images/Engagement.png",
    },
    {
      name: "Haldi",
      time: "November 30, 2026",
      description: "",
      image: "/images/Haldi.png",
    },
    {
      name: "Mehendi",
      time: "December 1, 2026",
      description: "",
      image: "/images/Mehendi.png",
    },
    {
      name: "Wedding",
      time: "December 2, 2026",
      description: "",
      image: "/images/Wedding.png",
    },
  ],

  // ---------- Families ----------
  families: {
    sectionIntro: "With blessings from",
    // Add or remove family cards the same way as events.
    groups: [
      {
        title: "Groom's Family",
        names: "Durgesh Gupta and Family",
        message: "request the pleasure of your company",
        // Optional extra line inside the card, such as siblings. Use "" for both to hide it.
        extraTitle: "",
        extraNames: "",
      },
      {
        title: "Bride's Family",
        names: "Gyanchand Gupta and Family",
        message: "bless this sacred union",
        extraTitle: "",
        extraNames: "",
      },
    ],
    // Optional tribute to elders, with a photo. Set "names" to [] to hide this box.
    elders: {
      heading: "With eternal blessings from",
      names: [],
      photo: "",
    },
  },

  // ---------- Venue ----------
  venue: {
    name: "Sarva Utsav Lawn",
    addressLine1: "Mohamdabad",
    addressLine2: "Mau (U.P.)",
    // What to search on Google Maps to find the venue.
    // Tip: copy the exact venue name and city from Google Maps.
    mapSearch: "Sarva Family Mart, Mohamdabad Gohna, Jamin Baramadpur, Uttar Pradesh 276403",
  },

  // ---------- Footer (bottom of the page) ----------
  footer: {
    // Short line under the address. Use "" to hide it.
    blessingLine: "",
  },

  // ---------- Background music ----------
  music: {
    // MP3 file in public/audio. Use "" to turn music off completely.
    file: "/audio/wedding.mp3",
    // Volume from 0 (silent) to 1 (full).
    volume: 0.3,
    // Android phones block music until the guest taps. This welcome box asks them to tap.
    welcomeTitle: "Welcome to Ashish & Nidhi's Wedding",
    welcomeMessage: "Step into our world of love, laughter, and forever.",
    welcomeButton: "Enter the Celebration",
  },

  // ---------- Link preview (WhatsApp, iMessage, social media) ----------
  share: {
    title: "Ashish & Nidhi | Wedding Celebration",
    description:
      "Join us in celebrating the wedding of Ashish & Nidhi on December 2, 2026 in Mau, Uttar Pradesh.",
    // Image shown in the link preview. A 1200 x 630 JPG works best.
    image: "/images/share-preview.jpg",
  },
};

export type WeddingConfig = typeof wedding;
