import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText} from '../components/layout.module.css';

const pricing = () => {
  return (
    <Layout pageTitle="Pricing Page">
        <div>Pricing page</div>
        <p>
            Pricing
        </p> 
        <li className={navLinkItem}>
            <Link to="/checkout" className={navLinkText}>
                Pricing
            </Link>
        </li>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>Pricing</title>
        <meta name="description" content="Your description" />
    </>
)

export default pricing