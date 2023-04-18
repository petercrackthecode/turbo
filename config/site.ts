import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Turbo",
  description:
    "An all-in-one productivity app to help you manage tasks, calendar, and time tracking in one place.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/petercrackstuff",
    github: "https://github.com/petercrackthecode/turbo",
    docs: "https://github.com/petercrackthecode/turbo",
  },
}
