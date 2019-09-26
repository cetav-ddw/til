import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Arti from '../components/Arti'

const IndexPage = ({ data }) => (
  <Arti>
    <SEO title='Home' />

    {data.allMarkdownRemark.edges.map(post => (
      <div className='arti' key={post.node.id}>
        <h3 className='arti__title'>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <Link to={post.node.frontmatter.path}>Read More</Link>
      </div>
    ))}

  </Arti>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default IndexPage
