import React from "react"
import "./author.scss"

const Author = ({ author, date, additionalClass }) => (
  <small className={`article__author ${additionalClass}`}>
    Publicado por{" "}
    <a className="author__link" href={`https://github.com/${author}`}>
      {author}
    </a>{" "}
    el {date}
  </small>
)

Author.defaultProps = {
  additionalClass: "",
}

export default Author
