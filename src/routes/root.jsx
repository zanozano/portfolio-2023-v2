import {
    AboutUs,
    CaseStudies,
    ContactUs,
    Home,
    Methodology,
} from '../views';

export const root = [
    { name: "", path: '/', component: Home },
    { name: "Methodology", path: '/methodology', component: Methodology },
    { name: "Case Studies", path: '/case-studies', component: CaseStudies },
    { name: "About Us", path: '/about-us', component: AboutUs },
    { name: "Contact Us", path: '/contact-us', component: ContactUs },
];

