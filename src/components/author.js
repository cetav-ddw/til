import React from 'react';
import './author.scss';

const Author = ({ author, date }) => (
    <small className="arti__author">
        <a className="author__link" href={`https://github.com/${author}`}>{author}</a> en {date}
    </small>
)

export default Author;