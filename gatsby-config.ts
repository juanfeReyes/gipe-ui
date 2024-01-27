import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-mdx-source-name` ,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-transformer-yaml",
      options: {
          typeName: ({node}) => {
          const name = node.sourceInstanceName
          if (name === `services`) {
            return `Service`
          }
          return name
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "clientLogos",
        path: `${__dirname}/src/images/client-logos/`,
      },
      __key: "clientLogos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "servicesImages",
        path: `${__dirname}/src/images/services/`,
      },
      __key: "servicesImages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/data/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/data/news`,
      },
    },
    
  ]
};

export default config;
