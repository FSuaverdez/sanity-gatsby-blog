export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6089fcb9d603891c894bf656",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8zd7venp",
                  apiId: "4a3ae7d3-1f9f-4e2d-858d-23a94ad85362",
                },
                {
                  buildHookId: "6089fcb9b6e5721b808a7f7e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-aympvd2n",
                  apiId: "1d05bcd0-4559-4d91-b841-c400fd59b29b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/FSuaverdez/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-aympvd2n.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
