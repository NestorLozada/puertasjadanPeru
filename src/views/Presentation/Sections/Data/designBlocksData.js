const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/logos/producto-4.jpg";
import imgFeatures from "@/assets/logos/producto-4.jpg";
import imgBlogPosts from "@/assets/logos/producto-4.jpg";
import imgTestimonials from "@/assets/logos/producto-4.jpg";
import imgTeam from "@/assets/logos/producto-4.jpg";
import imgStat from "@/assets/logos/producto-4.jpg";
import imgPagination from "@/assets/img/pagination.png";


export default [
  {
    heading: "Design Blocks",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: imgPricing,
        title: "Pricing",
        subtitle: "8 Examples",
        route: "presentation",
        pro: false
      }, 
      {
        image: imgBlogPosts,
        title: "Blog Posts",
        subtitle: "11 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: imgTestimonials,
        title: "Testimonials",
        subtitle: "11 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: imgTeam,
        title: "Teams",
        subtitle: "6 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: imgStat,
        title: "Stats",
        subtitle: "3 Examples",
        route: "presentation",
        pro: false
      },
    ]
  },
  {
    heading: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      }
    ]
  },
  
];
