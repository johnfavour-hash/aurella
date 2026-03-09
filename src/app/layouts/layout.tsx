import ToasterReseter from "@components/shared/ToasterReseter";
import { Toaster } from "@components/ui/toaster";
import { Outlet } from "react-router";
import Header from "@components/shared/layout/Header";
import AnnouncementBar from "@components/shared/layout/AnnouncementBar";

const RootLayout = () => {
    return <>
        <AnnouncementBar />
        <Header />
        <Outlet />
        <Toaster /> {/* global toast notifications */}
        <ToasterReseter /> {/* reset toast notifications */}
    </>


}

export default RootLayout;
