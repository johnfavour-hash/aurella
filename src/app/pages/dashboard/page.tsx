import Hero from "@components/shared/hero/Hero";
import FeaturedCollection from "@components/shared/featured/FeaturedCollection";
import ShopByCategory from "@components/shared/categories/ShopByCategory";
import LimitedTimeOffer from "@components/shared/offers/LimitedTimeOffer";
import Testimonial from "@components/shared/testimonials/Testimonial";
import Subscribe from "@components/shared/subscribe/Subscribe";
import Footer from "@components/shared/layout/Footer";

const DashboardPage = () => {
    return (
        <>
            <Hero />
            <FeaturedCollection />
            <ShopByCategory />
            <LimitedTimeOffer />
            <Testimonial />
            <Subscribe />
            <Footer />
        </>
    )
}

export default DashboardPage;
