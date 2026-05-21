export type WorkSize =
  | "w-tall"
  | "w-wide"
  | "w-sq"
  | "w-half"
  | "w-third"
  | "w-full"
  | "w-portrait-large";

export interface WorkRecord {
  num: string;
  titleLead: string;
  titleEm: string;
  titleTrail?: string;
  alt: string;
  meta: string;
  src: string;
  size: WorkSize;
}

/**
 * Selected plates rendered in the editorial grid.
 * IMG_0363 ("devil-scythe") opens the grid as the featured Plate I.
 * kanata_sky is reserved for the Process spread (rendered with the .mp4).
 * ML_Senya is reserved for the Hero cover.
 */
export const works: WorkRecord[] = [
  {
    num: "PL. I",
    titleLead: "Original / ",
    titleEm: "red eclipse",
    alt: "Original character — dark-haired figure with scythe-tail under a red eclipse, by Athaum",
    meta: "Pl. I · 2024 · OC · Digital",
    src: "/images/devil-scythe.jpg",
    size: "w-portrait-large",
  },
  {
    num: "PL. II",
    titleLead: "Kanata · ",
    titleEm: "asleep in class",
    alt: "Kanata — red-haired original character asleep on a desk by a window",
    meta: "Pl. II · 2021 · OC · Digital",
    src: "/images/kanata-sleeping.jpg",
    size: "w-wide",
  },
  {
    num: "PL. III",
    titleLead: "Study / ",
    titleEm: "papillon",
    alt: "Pale-haired character watching a pink butterfly — digital sketch study",
    meta: "Pl. III · 2022 · Study",
    src: "/images/butterfly.png",
    size: "w-half",
  },
  {
    num: "PL. IV",
    titleLead: "Ganyu × ",
    titleEm: "Mona",
    alt: "Ganyu (Genshin Impact) wearing Mona's witch outfit, by Athaum",
    meta: "Pl. IV · 2022 · Fanart · Genshin",
    src: "/images/ganyu-mona.jpg",
    size: "w-half",
  },
  {
    num: "PL. V",
    titleLead: "Yuta & ",
    titleEm: "Rika",
    alt: "Yuta Okkotsu with Rika behind him — Jujutsu Kaisen fanart",
    meta: "Pl. V · 2022 · Fanart · JJK",
    src: "/images/yuta.jpg",
    size: "w-third",
  },
  {
    num: "PL. VI",
    titleLead: "",
    titleEm: "Yufine",
    titleTrail: ", in lemon",
    alt: "Yufine (Epic Seven) with editorial yellow typography background",
    meta: "Pl. VI · 2021 · Fanart · E7",
    src: "/images/yufine.jpg",
    size: "w-third",
  },
  {
    num: "PL. VIII",
    titleLead: "Background, ",
    titleEm: "first light",
    alt: "Silhouette landscape of pylons over rolling hills at dawn — environment study",
    meta: "Pl. VIII · 2023 · Background",
    src: "/images/landscape-wide.jpg",
    size: "w-full",
  },
  {
    num: "PL. IX",
    titleLead: "",
    titleEm: "Yor",
    titleTrail: ", thorn princess",
    alt: "Yor Forger (Spy × Family) in black assassin dress with red splatter",
    meta: "Pl. IX · 2022 · Fanart · SxF",
    src: "/images/yor.png",
    size: "w-third",
  },
  {
    num: "PL. X",
    titleLead: "Commission / ",
    titleEm: "raffle OC",
    alt: "Red-haired idol commission for a raffle winner",
    meta: "Pl. X · 2021 · Comm.",
    src: "/images/raffle.jpg",
    size: "w-third",
  },
  {
    num: "PL. XI",
    titleLead: "Kanata · ",
    titleEm: "tama",
    alt: "Kanata standing in red butterfly armour — original character",
    meta: "Pl. XI · 2022 · OC",
    src: "/images/kanata-tama.jpg",
    size: "w-third",
  },
  {
    num: "PL. XII",
    titleLead: "",
    titleEm: "Sailor Moon",
    titleTrail: " / close-up",
    alt: "Sailor Moon redraw portrait, teal background",
    meta: "Pl. XII · 2021 · Fanart · Redraw",
    src: "/images/sailor-moon.jpg",
    size: "w-half",
  },
  {
    num: "PL. XIII",
    titleLead: "",
    titleEm: "Camille",
    titleTrail: " — boots & glare",
    alt: "Camille (League of Legends) seated wearing combat boots",
    meta: "Pl. XIII · 2020 · Fanart · LoL",
    src: "/images/camille.jpg",
    size: "w-half",
  },
];

export interface IndexItem {
  src: string;
  name: string;
  num: string;
}

export const indexItems: IndexItem[] = [
  { src: "/images/ml-senya.jpg", name: "ML · Senya", num: "017" },
  { src: "/images/devil-scythe.jpg", name: "Crimson", num: "016" },
  { src: "/images/kanata-sky.jpg", name: "Kanata · sky", num: "015" },
  { src: "/images/kanata-sleeping.jpg", name: "Kanata · thesis", num: "014" },
  { src: "/images/butterfly.png", name: "Papillon", num: "013" },
  { src: "/images/ganyu-mona.jpg", name: "Ganyu", num: "012" },
  { src: "/images/yuta.jpg", name: "Yuta", num: "011" },
  { src: "/images/yufine.jpg", name: "Yufine", num: "010" },
  { src: "/images/landscape-wide.jpg", name: "Pylons", num: "009" },
  { src: "/images/yor.png", name: "Yor", num: "008" },
  { src: "/images/raffle.jpg", name: "Raffle", num: "007" },
  { src: "/images/kanata-tama.jpg", name: "Kanata · tama", num: "006" },
  { src: "/images/sailor-moon.jpg", name: "Sailor", num: "005" },
  { src: "/images/camille.jpg", name: "Camille", num: "004" },
  { src: "/images/angel.png", name: "Angel", num: "003" },
  { src: "/images/kanata-cinnamon.jpg", name: "Kanata · cinnamon", num: "002" },
  { src: "/images/oken.jpg", name: "Oken · sketch", num: "001" },
];
