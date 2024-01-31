import readingTime from "reading-time"
import path from 'path'

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}


export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const articleDetailTemplate = path.resolve('./src/components/news/ArticleDetail.tsx')
  const companyServiceDetailTemplate = path.resolve('./src/components/gipeServices/CompanyServiceDetail.tsx')

  const result = await graphql(`
  query {
    allMdx {
      nodes {
        fields {
          source
        }
        id
        frontmatter {
          title
        }
        internal {
          contentFilePath
        }
      }
    }
  }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const articles = result.data.allMdx.nodes.filter(n => n.fields.source === 'news')
  articles.forEach(node => {
    createPage({
      path: `/news/${node.frontmatter.title}`,
      component: `${articleDetailTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })

  const companyServices = result.data.allMdx.nodes.filter(n => n.fields.source === 'services')
  companyServices.forEach(node => {
    createPage({
      path: `/services/${node.frontmatter.title}`,
      component: `${companyServiceDetailTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
