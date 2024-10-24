import Dashboard from "../screens/dashboard.screen";

const journeyId = "DBRD";
export const DashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard Root",
  header: "Dashboard Root",
  component: "",
  children: [
    {
      path: "",
      name: "Dashboard Home",
      header: "Dashboard Home",
      component: Dashboard,
      extraParams: {
        journeyId,
        screenId: "DBRD-HOME",
      },
    },
  ],
};
