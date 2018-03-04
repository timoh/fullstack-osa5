import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('when app loads, should not show any blog posts', () => {
    app.update()
    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)
  })
})