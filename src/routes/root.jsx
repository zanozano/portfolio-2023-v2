import {
    AboutUs,
    CaseStudies,
    Contact,
    Home,
    Methodology,
} from '../views';

export const root = [
    { name: "", path: '/', component: Home },
    { name: "About Us", path: '/about-us', component: AboutUs },
    { name: "Methodology", path: '/methodology', component: Methodology },
    { name: "Case Studies", path: '/case-studies', component: CaseStudies },
    { name: "Contact", path: '/contact', component: Contact },
];

