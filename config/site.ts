interface SiteConfig {
  navigation: NavigationItem[];
}

interface NavigationItem {
  name: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  navigation: [
    {
      name: "Blog",
      url: "/blog",
    },
  ],
};
