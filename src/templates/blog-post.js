import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/seo';
import Author from '../components/author';
import Arti from '../components/arti';
import './blog-post.scss';

export default function Template({ data }) {
  const post = data.markdownRemark;
  // To return all the anchors with a target="_blank"

  return (
    <Arti>
      <SEO title={post.frontmatter.title} />
      <Link to='/' className="arti__line">Go Back</Link>
      <h1 className='arti__title'>{post.frontmatter.title}</h1>
      <Author author={post.frontmatter.author} date={post.frontmatter.date} />
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