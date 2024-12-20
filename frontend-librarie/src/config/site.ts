export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aurélie Moustardier - Portfolio",
  description: "Bienvenu sur mon portfolio.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Project",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/AurelieMous",
    linkedin: "https://www.linkedin.com/in/aur%C3%A9lie-moustardier-7393672b2/",
  },
};
