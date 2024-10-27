import FloorMap from "../screens/floor-map.screen";

const journeyId = "DBRD";
export const FloorMapRoutes = {
  path: "/floor-map",
  name: "Dashboard Root",
  header: "Dashboard Root",
  component: "",
  children: [
    {
      path: "",
      name: "Dashboard Home",
      header: "Dashboard Home",
      component: FloorMap,
      extraParams: {
        journeyId,
        screenId: "DBRD-HOME",
      },
    },
  ],
};
