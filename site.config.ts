import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Wildwood Honey",
    tagline: "Raw, unfiltered honey from the Sherwood Forest",
    description:
      "Eighty hives, one family, twelve years of craft. Our raw honey is cold-extracted and never heated — preserving every enzyme, pollen grain, and natural flavour the bees intended.",
    email: "hello@wildwoodhoney.co.uk",
    location: "Sherwood Forest, Nottinghamshire",
    foundedYear: 2012,
    socialInstagram: "https://instagram.com/wildwoodhoney",
    socialFacebook: "https://facebook.com/wildwoodhoney",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "80", label: "Active Hives" },
    { value: "12", label: "Honey Varieties" },
    { value: "3,200+", label: "Happy Customers" },
    { value: "Est. 2012", label: "Nottinghamshire" },
  ],
};

export default config;
