import GuestList from "../screens/guest-list.screen";

const journeyId = "DBRD";
export const GuestListRoutes = {
  path: "/guest-list",
  name: "Guest Root",
  header: "Guest Root",
  component: "",
  children: [
    {
      path: "",
      name: "Guest Home",
      header: "Guest Home",
      component: GuestList,
      extraParams: {
        journeyId,
        screenId: "GUST-LIST",
      },
    },
  ],
};
