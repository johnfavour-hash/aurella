import { Route, Routes, BrowserRouter } from "react-router";
import AuthRoutes from "./auth.route";
import ProfileRoutes from "./profile.route";
import { lazy } from "react";
import RootLayout from "@app/layouts/layout";

const DashboardPage = lazy(() => import("../app/pages/dashboard/page"));
const ProductsPage = lazy(() => import("../app/pages/products/page"));
const WomenPage = lazy(() => import("../app/pages/women/page"));
const MenPage = lazy(() => import("../app/pages/men/page"));
const AccessoriesPage = lazy(() => import("../app/pages/accessories/page"));
const CheckoutPage = lazy(() => import("../app/pages/checkout/page"));
const ProductDetailsPage = lazy(() => import("../app/pages/product-details/page"));


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* public routes */}
                <Route element={<RootLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/about" element={<p>About</p>} />
                    <Route path="/contact" element={<p>Login</p>} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/women" element={<WomenPage />} />
                    <Route path="/men" element={<MenPage />} />
                    <Route path="/accessories" element={<AccessoriesPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                </Route>
            </Routes>



            {/* auth routes */}
            <AuthRoutes />

            {/* protected routes */}
            <ProfileRoutes />
        </BrowserRouter >
    )
}

export default Router;
