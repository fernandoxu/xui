import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Aside from './aside'

export default function() {
  return (
    <>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{ height: 500, background: 'skyblue' }}>
          <Header>header</Header>
          <Content style={{ background: 'cyan' }}>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{ height: 500, background: 'skyblue' }}>
          <Header>header</Header>
          <Layout>
            <Aside style={{ width: 300, background: 'lightpink' }}>aside</Aside>
            <Content style={{ background: 'cyan' }}>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{ height: 500, background: 'skyblue' }}>
          <Header>header</Header>
          <Layout>
            <Content style={{ background: 'cyan' }}>content</Content>
            <Aside style={{ width: 300, background: 'lightpink' }}>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{ height: 500, background: 'skyblue' }}>
          <Aside style={{ width: 300, background: 'lightpink' }}>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content style={{ background: 'cyan' }}>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  )
}
