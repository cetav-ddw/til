import React from "react"
import { graphql } from 'gatsby'
import Link from "gatsby-link"
import SEO from "../components/seo"
import Author from "../components/author"
import Article from "../components/article"
import Header from "../components/header"
import Footer from "../components/footer"
import "./blog-post.scss"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Header />
      <main>
        <Article>
          <Link to="/" className="article__line">
            Inicio
          </Link>
          <h1 className="article__title article__title--bg">
            {post.frontmatter.title}
          </h1>
          <Author
            author={post.frontmatter.author}
            date={post.frontmatter.date}
          />
          <div
            className="article__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Article>
      </main>
      <Footer />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        author
        tags
      }
    }
  }
`
