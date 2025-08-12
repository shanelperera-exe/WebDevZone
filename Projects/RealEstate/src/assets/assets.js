import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Ocean Breeze Residences",
      price: "Rs. 85,000,000",
      location: "Colombo",
      image: project_img_1
    },
    {
      title: "Hilltop Green",
      price: "Rs. 65,000,000",
      location: "Kandy",
      image: project_img_2
    },
    {
      title: "Serendib Suites",
      price: "Rs. 72,000,000",
      location: "Galle",
      image: project_img_3
    },
    {
      title: "Central Plaza Residencies",
      price: "Rs. 95,000,000",
      location: "Negombo",
      image: project_img_4
    },
    {
      title: "Cinnamon View",
      price: "Rs. 68,000,000",
      location: "Matara",
      image: project_img_5
    },
    {
      title: "Lotus Grove",
      price: "Rs. 78,000,000",
      location: "Anuradhapura",
      image: project_img_6
    },
];

export const testimonialsData = [
    {
        name: "Nimal Perera",
        title: "Hotel Manager",
        image: profile_img_1,
        alt: "Portrait of Nimal Perera",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect home in Colombo. Their local knowledge and warm approach made the process smooth and stress-free."
    },
    {
        name: "Dilani Fernando",
        title: "Architect",
        image: profile_img_2,
        alt: "Portrait of Dilani Fernando",
        rating: 4,
        text: "They guided me through every step of buying property in Galle. I truly appreciate their professionalism and understanding of the Sri Lankan real estate market."
    },
    {
        name: "Suresh Jayasinghe",
        title: "Entrepreneur",
        image: profile_img_3,
        alt: "Portrait of Suresh Jayasinghe",
        rating: 5,
        text: "Thanks to their expertise, I found the perfect holiday villa in Kandy. They made the entire process simple, transparent, and enjoyable."
    }
];
