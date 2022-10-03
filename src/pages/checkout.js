import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText} from './layout.module.css';

const checkout = () => {
  return (
    <Layout pageTitle="Checkout Page">
        <div>CheckoutPage</div>
        <p>
            Checkout
        </p> 
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>Checkout Page</title>
        <meta name="description" content="Your description" />
    </>
)

export default checkout