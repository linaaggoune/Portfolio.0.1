import {Outlet} from "react-router";
import Header from "../Component/Header/Header.tsx";
import Footer from "../Component/Footer/Footer.tsx";

function RootPage() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootPage
