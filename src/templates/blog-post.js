import React from 'react'
import Link from 'gatsby-link'
import SEO from '../components/seo'
import Arti from '../components/Arti'
import './blog-post.scss'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Arti>
      <SEO title={post.frontmatter.title} />
      <Link to='/'>Go Back</Link>
      <h1 className='arti__title'>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Arti>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`