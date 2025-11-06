import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router";

export default function MainLauout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
