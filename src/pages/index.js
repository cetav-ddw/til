import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Author from "../components/author"
import Article from "../components/article"
import Header from "../components/header"
import Footer from "../components/footer"
import "./index.scss"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Inicio" />
    <Header />
    <main>
      {data.allMarkdownRemark.edges.map(({ node: post }) => {
        return (
          <Article key={post.id}>
            <h2 className="article__title">
              <Link
                to={post.frontmatter.path}
                className="article__link article__link--bg"
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Author
              author={post.frontmatter.author}
              date={post.frontmatter.date}
            />
            <div
              className="article__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Article>
        )
      })}
    </main>
    <Footer />
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
