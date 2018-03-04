import React from 'react'

import PropTypes from 'prop-types'

const NewBlog = ({
  submitNewBlog,
  handleNewBlogFieldChange,
  title,
  author,
  url
}) => (
  <div>
  <h2>create new</h2>
  <form onSubmit={submitNewBlog}>
    <div>
      <label>title:</label>
      <input type="text" name="title" value={title} onChange={handleNewBlogFieldChange} />
    </div>

    <div>
      <label>author:</label>
      <input type="text" name="author" value={author} onChange={handleNewBlogFieldChange} />
    </div>

    <div>
      <label>url:</label>
      <input type="text" name="url" value={url} onChange={handleNewBlogFieldChange} />
    </div>

    <div>
      <button>create!</button>
    </div>
  </form>
</div>
)

NewBlog.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default NewBlog