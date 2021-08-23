module.exports = {
  siteMetadata: {
    siteUrl: "https://www.subhambharadwaz.codes",
    title: "Subham Bharadwaz - Personal Blog",
    description:
      "I'm Subham Bharadwaz. This is my personal blog. Focus on React, CSS, and more!",
    keywords: "react, css, gatsby, nextjs,  serverless functions",
    image: `https://res.cloudinary.com/dkitlfy13/image/upload/v1629734010/blog_jbbhbf.jpg`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      // TODO Explore about manifest
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/post-layout.js"),
        },
      },
    },
  ],
};
