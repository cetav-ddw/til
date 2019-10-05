import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Author from '../components/author';
import Article from '../components/article';
import Header from '../components/header';
import './index.scss';

const IndexPage = ({ data }) => (
  <>
    <Header/>
    <Article>
      <SEO title='Home' />
      {data.allMarkdownRemark.edges.map(({node: post}) => {
        return (
          <div key={post.id}>
            <Link to={post.frontmatter.path}>
              <h3 className='article__title'>{post.frontmatter.title}</h3>
            </Link>
            <Author author={post.frontmatter.author} date={post.frontmatter.date} />
            <hr className="article__title--line" />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr className="article__title--endline" />
          </div>
        );
      })}
    </Article>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          html
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
