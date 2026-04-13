import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="grow mx-20 p-20 bg-gray-100">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout