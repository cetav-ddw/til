import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/seo';
import Author from '../components/author';
import Article from '../components/article';
import Header from '../components/header';
import './blog-post.scss';

export default function Template({ data }) {
  const post = data.markdownRemark;
  // post.frontmatter.tags; // is available now!
  return (
    <>
      <Header/>
      <Article>
        <SEO title={post.frontmatter.title} />
        <Link to='/' className="article__line">Go Back</Link>
        <h1 className='article__title'>{post.frontmatter.title}</h1>
        <Author author={post.frontmatter.author} date={post.frontmatter.date} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </>
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
        tags
      }
    }
  }
`