const orange = 'rgb(237,157,85)';
const white = 'rgb(255, 251, 242)';
const teal = 'rgb(103, 206, 178)';
const brown = 'rgba(114, 98, 99, .99)';
const ltBrown = 'rgb(252, 219, 148)';
const dkBrown = 'rgb(61, 45, 45)';
const folder = 'rgba(224, 210, 184, .9)';
const chalkboard = 'rgba(45, 38, 38, .99)';

export const theme = {
    dark:{
        sectionHeadings: `${white}`,
        highlight: `${orange}`,
        tabs: `${orange}`,
        dates: `${white}`,
        title: `${white}`,
        modal: {
            btnModal: `${orange}`,
            text: `${orange}`,
            bckg: `${chalkboard}`
        },
        greet: `${white}`,
        bckg: `${brown}`,
        text: `${ltBrown}`,
        folder: `${folder}`,
        icon: `${orange}`,
        description: `${orange}`,
        link: `${teal}`,
        filter: 'sepia(100%)',
        chevron: `${ltBrown}`,
        nav: {
            static: `${white}`,
            hover: `${orange}`
        },
        socialLinks: {
            static: `${white}`,
            hover: `${orange}`,
        },
        headline: `${orange}`,
        btnContact: {
            bckg: 'inherit',
            border: `${white}`,
            text: `${white}`,
            hover: `${orange}`
        },
        footer: {
            bckg: `${dkBrown}`
        },
        toggle: {
            bckg: `${white}`,
            slide: `${orange}`
        },
        farewell: {
            envelope: `${white}`,
            border: `${orange}`
        }

    },
    light:{
        sectionHeadings: `${brown}`,
        highlight: `${teal}`,
        tabs: `${teal}`,
        dates: `${dkBrown}`,
        title: `${dkBrown}`,
        modal: {
            btnModal: `${teal}`,
            text: `${teal}`,
            bckg: `${white}`,
        },
        greet: `${brown}`,
        nav: {
            static: `${brown}`,
            hover: `${orange}`
        },
        text: `${dkBrown}`,
        folder: `${brown}`,
        icon: `${teal}`,
        description: `${dkBrown}`,
        link: `${orange}`,
        filter: 'none',
        chevron: `${dkBrown}`,
        bckg: `${white}`,
        socialLinks: {
            static: `${brown}`,
            hover: `${orange}`,
        },
        headline: `${teal}`,
        btnContact: {
            bckg: `${orange}`,
            border: '0px',
            text: `${white}`,
            hover: 'inherit'
        },
        footer: {
            bckg: `${ltBrown}`
        },
        toggle: {
            bckg: `${brown}`,
            slide: `${teal}`
        },
        farewell: {
            envelope: `${orange}`,
            border: `${teal}`
        }
    }
};