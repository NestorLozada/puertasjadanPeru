
import imgPricing from "@/assets/logos/producto-4.jpg";
import imgFeatures from "@/assets/logos/producto-4.jpg";
import imgBlogPosts from "@/assets/logos/producto-4.jpg";
import imgTestimonials from "@/assets/logos/producto-4.jpg";
import imgTeam from "@/assets/logos/producto-4.jpg";
import imgStat from "@/assets/logos/producto-4.jpg";


export default [
  {
    heading: "Design Blocks",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: imgFeatures,
        title: "Puerta automática abtible RECORD",
        subtitle: "",
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
  }
];
