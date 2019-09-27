import React from 'react'
import Link from 'gatsby-link'
import SEO from '../components/seo'
import Arti from '../components/Arti'
import putValuesHTML from '../utils/html-parse-options';
import './blog-post.scss'

export default function Template({ data }) {
  const post = data.markdownRemark
  const reformatted = putValuesHTML({
    selector: 'a',
    attrib: 'target',
    value: '_blank',
    html: post.html
  });
  // To return all the anchors with a target="_blank"

  return (
    <Arti>
      <SEO title={post.frontmatter.title} />
      <Link to='/'>Go Back</Link>
      <h1 className='arti__title'>{post.frontmatter.title}</h1>
      <small>
        {post.frontmatter.author} en {post.frontmatter.date}
      </small>
      {/* {(console.log(post.html))} */}
      <div dangerouslySetInnerHTML={{ __html: reformatted }} />
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