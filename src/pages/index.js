import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import putValuesHTML from '../utils/html-parse-options';
import '../components/arti.scss';
import './index.scss';

const IndexPage = ({ data }) => (
  <div>
    <SEO title='Home' />
    {data.allMarkdownRemark.edges.map(post => {
      // To return all the anchors with a target="_blank"
      const reformatted = putValuesHTML({
        selector: 'a',
        attrib: 'target',
        value: '_blank',
        html: post.node.html
      });
      return (
        <div className='arti' key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            <h3 className='arti__title'>{post.node.frontmatter.title}</h3>
          </Link>
          <small>
            Por {post.node.frontmatter.author} en {' '}
            {post.node.frontmatter.date}
          </small>
          <hr className="arti__title--line" />
          <div dangerouslySetInnerHTML={{ __html: reformatted }} />
          <hr className="arti__title--endline" />
        </div>
      );
    })}
  </div>
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
