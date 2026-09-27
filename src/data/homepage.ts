export interface NavLink {
  label: string;
  href: string;
}

export interface IconItem {
  icon: string;
  title: string;
}

export interface IconTextItem extends IconItem {
  text: string;
}

export interface Category {
  icon: string;
  name: string;
  image: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface Review {
  quote: string;
  name: string;
  role: string;
}

export interface FooterGroup {
  heading: string;
  links: string[];
}

export const navLinks: NavLink[] = [
  { label: "Products⌄", href: "#categories" },
  { label: "How It Works", href: "#process" },
  { label: "Who We Serve", href: "#industries" },
  { label: "About", href: "#story" },
  { label: "Resources⌄", href: "#footer" },
];

export const heroPerks: IconItem[] = [
  { icon: "⊙", title: "Free Digital Mockup" },
  { icon: "◷", title: "No Minimum Order" },
  { icon: "⊕", title: "Fast Turnaround" },
  { icon: "⊙", title: "No Upfront Fee" },
  { icon: "◴", title: "Top Turnaround" },
  { icon: "✧", title: "Premium Quality" },
];

export const benefits: IconTextItem[] = [
  { icon: "?", title: "Premium Materials", text: "Built to last" },
  { icon: "?", title: "Fast Turnaround", text: "On-time delivery" },
  { icon: "?", title: "No Minimum Order", text: "Any quantity" },
  { icon: "?", title: "Free Design Support", text: "Bring your idea to life" },
  { icon: "?", title: "U.S. Based Support", text: "Real people, real help" },
];

export const categories: Category[] = [
  { icon: "??", name: "Embroidered", image: "/images/categories/EMBROIDERY.png" },
  { icon: "???", name: "PVC", image: "/images/categories/PVC.png" },
  { icon: "?", name: "Leather", image: "/images/categories/LEATHER.png" },
  { icon: "???", name: "Chenille", image: "/images/categories/CHENILLE.png" },
  { icon: "?", name: "Woven", image: "/images/categories/WOVEN.png" },
  { icon: "??", name: "Sublimated", image: "/images/categories/SUBLIMATED.png" },
  { icon: "?", name: "Iron-On", image: "/images/categories/IRON%20ON.png" },
  { icon: "????", name: "Velcro", image: "/images/categories/VELCRO.png" },
];

export const stats: Stat[] = [
  { icon: "♧", value: "10,000+", label: "Happy Customers" },
  { icon: "☆", value: "4.9/5", label: "Average Rating" },
  { icon: "⚑", value: "100%", label: "U.S. Focused" },
];

export const steps: IconTextItem[] = [
  { icon: "?", title: "Share Your Idea", text: "Tell us your design, size, quantity and any special requirements." },
  { icon: "?", title: "Approve Mockup", text: "We create a free digital mockup for your review." },
  { icon: "?", title: "We Produce", text: "Our experts bring your patches to life." },
  { icon: "?", title: "Delivered to You", text: "Fast, reliable shipping across the USA." },
];

export const industries: IconItem[] = [
  { icon: "?", title: "Corporate & Business" },
  { icon: "?", title: "Schools & Teams" },
  { icon: "?", title: "Government & Public Safety" },
  { icon: "?", title: "Events & Promotions" },
  { icon: "?", title: "Clothing & Fashion" },
  { icon: "?", title: "Outdoor & Adventure" },
];

export const reviews: Review[] = [
  { quote: "Amazing quality and super fast service. Our team patches turned out perfect!", name: "Jason M.", role: "Business Owner" },
  { quote: "The design support was fantastic. Highly recommend!", name: "Sarah L.", role: "Team Manager" },
  { quote: "Professional, responsive, and the patches look even better in person.", name: "Mike R.", role: "Brand Founder" },
];

export const quotePerks = ["Free digital mockup", "No minimum order", "Fast turnaround", "U.S. based support"];

export const patchTypes = ["Embroidered", "PVC", "Woven", "Leather"];

export const quantities = ["50-100", "100-500", "500+"];

export const footerGroups: FooterGroup[] = [
  { heading: "Products", links: ["Embroidered Patches", "PVC Patches", "Woven Patches", "Leather Patches", "Chenille Patches", "All Products"] },
  { heading: "Company", links: ["About Us", "Our Work", "Reviews", "Blog", "Contact"] },
  { heading: "Resources", links: ["Design Guide", "Patch Backings", "Artwork Requirements", "Shipping Information", "FAQs"] },
];
