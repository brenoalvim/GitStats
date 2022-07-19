import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Header from '../components/Header'

import Homepage from '../components/Home'

import AboutMe from '../components/About'

import Stats from '../components/Stats'

import { useEffect } from 'react'

import { useState } from 'react'

export async function getServerSideProps(context: any) {
  const username = context.query.username

  return {
    props: {
      username: username
    }
  }
}

export default function Home(props: any) {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${props.username}`
      )
      const responseJson = await response.json()
      setStats(responseJson)
    }
    getData()
  }, [])

  const [stats, setStats] = useState([])

  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name={props.username} />
      <Header stats={stats} />
      <div id="Home"></div>
      <Homepage stats={stats} />
      <div id="Stats"></div>
      <Stats stats={stats} />

      <style>
        {`
       * {
        scroll-behavior: smooth;
      }
         body{
          margin: 0;
          padding: 0;
          background-color: var(--brand-color);
        }
        :root {
          --brand-color: #0f172a;
          --dark-color: #152d73;
          --mid-color: #cbd5e1;
          --light-color: #f8fafc;
          --green-color: #5ae4a8;
          --grey-color: #2c3342;
          --surface-color: #fff;
        }
        body::-webkit-scrollbar {
          width: 12px; /* width of the entire scrollbar */
        }

        body::-webkit-scrollbar-track {
          background: var(--brand-color); /* color of the tracking area */
        }

        body::-webkit-scrollbar-thumb {
          background-color: var(
            --brand-color
          ); /* color of the scroll thumb */
          border-radius: 20px; /* roundness of the scroll thumb */
          border: 3px solid var(--brand-color); /* creates padding around scroll thumb */
        }`}
      </style>
    </>
  )
}
