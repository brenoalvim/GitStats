import { Div } from './styles'

interface StatsProps {
  login: any
}

export default function Stats(props: StatsProps) {
  return (
    <Div>
      <h1>
        My Stats
        <div className="underline"></div>
      </h1>
      <div className="hr"></div>
      <div className="cardsStats">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${props.login}&hide_border=true&count_private=true&show_icons=true&theme=react`}
          title="GitHub Stats"
          alt="GitHub Stats"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${props.login}&theme=react&hide_border=true`}
          title="Current Streak"
          alt="Current Streak"
        />
        <div className="hr"></div>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${props.login}&show_icons=true&locale=en&layout=compact&hide_border=true&theme=react&langs_count=10`}
          title="Most Used Languages"
          alt="Most Used Languages"
        />
      </div>
    </Div>
  )
}
