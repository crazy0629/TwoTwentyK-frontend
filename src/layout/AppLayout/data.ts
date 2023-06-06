export const headerData = [
  {
    label: "My hub",
    to: "/dashboard",
    children: [
      { label: "Dashboard", to: "" },
      { label: "Dates", to: "dates" },
      { label: "Categories", to: "categories" },
      { label: "Identities", to: "identities" },
      { label: "Triggers", to: "triggers" },
      { label: "Predictions", to: "predictions" },
      { label: "Card Packs", to: "packs" },
    ],
  },
  {
    label: "Crafting",
    to: "/crafting",
  },
  {
    label: "Buy packs",
    to: "/buy",
  },
  {
    label: "Marketplace",
    to: "/marketplace",
  },
  {
    label: "Learn to play",
    to: "/learn",
  },
];

export const notifications = [
  {
    date: "Jan 31 2023",
    title: "Your Prediction Came True!",
    desc: "The trigger {{Trigger Name}} has come true for {{Identity Name}}.",
    isNew: true,
  },
  {
    date: "Jan 31 2023",
    title: "Your Prediction Came True!",
    desc: "The trigger {{Trigger Name}} has come true for {{Identity Name}}.",
    isNew: true,
  },
  {
    date: "Jan 31 2023",
    title: "Your Prediction Came True!",
    desc: "The trigger {{Trigger Name}} has come true for {{Identity Name}}.",
    isNew: false,
  },
  {
    date: "Jan 31 2023",
    title: "Your Prediction Came True!",
    desc: "The trigger {{Trigger Name}} has come true for {{Identity Name}}.",
    isNew: false,
  },
];
