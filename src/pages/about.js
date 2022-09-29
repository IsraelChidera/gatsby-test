import * as React from 'react';
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
        <div>AboutPage</div>
        <p>
            Learning is fun.
        </p> 
    </Layout>
  )
}
export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Your description" />
    </>
)
export default AboutPage