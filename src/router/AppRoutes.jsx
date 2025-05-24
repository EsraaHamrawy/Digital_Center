import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import CorrsLayout from "@/components/layout/corrsLayout/corrsLayout.component";
import Home from "@/pages/home/home.page";
import CreateCorrs from "@/pages/corrsModule/createCorrs.page";
import MyTasks from "@/pages/corrsModule/myTasks.page";
import IncommingcorrsLogs from "@/pages/corrsModule/incomCorrs/incommingcorrsLogs.page";
import NotFound from "@/pages/notFound/notFound.page";
import OutgoingcorrsLogs from "../pages/corrsModule/outgoingcorrsLogs.page";
import CorrsHome from "../pages/corrsModule/home.page";
import PurchaseLayout from "../components/layout/purchaseLayout/purchaseLayout.component";
import PurchaseHome from "../pages/purchaseModule/home.page";
import CreatePurchase from "../pages/purchaseModule/createPurchase.page";
import PurchaseLog from "../pages/purchaseModule/purchaseLog.page";
import ProcurementTasks from "../pages/purchaseModule/Procurement/procuremenTtasks";
import ProcurementLog from "../pages/purchaseModule/Procurement/procurementLog";
import ManagerTask from "../pages/purchaseModule/manager/managerTask";
import ManagerLog from "../pages/purchaseModule/manager/managerLog";
import RequestDetails from "../pages/purchaseModule/requestDetails/requestDetails.page";

const AppRoutes = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/purchase",
      element: <PurchaseLayout />,
      children: [
        {
          path: "home",
          element: <PurchaseHome />,
        },
        {
          path: "createPurchase",
          element: <CreatePurchase />,
        },
        {
          path: "Purchaselog",
          element: <PurchaseLog />,
        },
        {
          path: "ManagerTask",
          element: <ManagerTask />,
        },
        {
          path: "ManagerLog",
          element: <ManagerLog />,
        },
        {
          path: "procurementtasks",
          element: <ProcurementTasks />,
        },
        {
          path: "procurementlog",
          element: <ProcurementLog />,
        },
        {
          path: "requestDetails/:id", // Dynamic route
          element: <RequestDetails />,
        },
      ],
    },
    {
      path: "/correspondences",
      element: <CorrsLayout />,
      children: [
        {
          path: "home",
          element: <CorrsHome />,
        },
        {
          path: "myTasks",
          element: <MyTasks />,
        },
        {
          path: "createCorrs",
          element: <CreateCorrs />,
        },
        {
          path: "incommingcorrsLogs",
          element: <IncommingcorrsLogs />,
        },
        {
          path: "outgoingcorrsLogs",
          element: <OutgoingcorrsLogs />,
        },
      ],
    },
    {
      path: "/notFound",
      element: <NotFound />,
    },

    {
      path: "*",
      element: <Navigate to="/notFound" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
