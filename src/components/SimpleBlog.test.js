import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {

  const blog = {
    title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
    author: 'M. Fowler',
    likes: 10
  }

  it('renders title, author and likes', () => {
    const blogComponent = shallow(<SimpleBlog blog={blog} />)

    expect(blogComponent.text()).toContain(blog.title)
    expect(blogComponent.text()).toContain(blog.author)
    expect(blogComponent.text()).toContain(blog.likes)
  })

  it('calls the event handler twice when button pressed twice', () => {
    const mockHandler = jest.fn()

    const blogComp = shallow(
      <SimpleBlog 
        blog={blog}
        onClick={mockHandler}
        />
    )

    const button = blogComp.find('button')
    button.simulate('click')
    button.simulate('click')
  
    expect(mockHandler.mock.calls.length).toBe(2)

  })
})