import { Items } from "regraph";

export const data: Items = {
  node1: { label: { text: "regraph test 1" } },
  node2: { label: { text: "regraph test 2" } },
  node3: { label: { text: "regraph test 3" } },
  node4: {
    label: { text: "regraph test 4" },
    data: {
      country: "usa",
      city: "san jose",
      continent: "north america",
    },
  },
  node5: {
    label: { text: "regraph test 5" },
    glyphs: [
      {
        position: "n",
        label: {
          text: "N",
        },
      },
      {
        position: "s",
        label: {
          text: "S",
        },
      },
      {
        position: "e",
        label: {
          text: "E",
        },
      },
      {
        position: "w",
        label: {
          text: "W",
        },
      },
    ],
  },
  link1: {
    id1: "node1",
    id2: "node2",
  },
};
