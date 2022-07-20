import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Header from '../components/Header'

import Homepage from '../components/Home'

import AboutMe from '../components/About'

import Stats from '../components/Stats'

import { useEffect } from 'react'

import { useState } from 'react'

import GlobalStyle from './global'

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
      if (responseJson.message == 'Not Found') {
        alert('User Not Found')
        window.location.href = `/`
      }
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
      <Header html={stats.html_url} />
      <GlobalStyle />
      <div id="Home"></div>
      <Homepage bio={stats.bio} name={stats.name} avatar={stats.avatar_url} />
      <div id="Stats"></div>
      <Stats login={stats.login} />
    </>
  )
}
