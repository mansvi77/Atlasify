 import{Footer} from "../Layout/UI/Footer"
 import{Headers} from"../Layout/UI/Headers";
  import{Outlet} from "react-router-dom";


 export const AppLayout = () => {
  return(
    <>
    <Headers />
    <Outlet />
    <Footer />
    </>

  );

 };