import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Author from "../components/author"
import Article from "../components/article"
import Header from "../components/header"
import "./index.scss"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Inicio" />
    <Header />
    <main>
      {data.allMarkdownRemark.edges.map(({ node: post }) => {
        return (
          <Article key={post.id}>
            <h3 className="article__title">
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h3>
            <Author
              additionalClass="article__title--line"
              author={post.frontmatter.author}
              date={post.frontmatter.date}
            />
            <div
              className="article__title--endline"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Article>
        )
      })}
    </main>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
