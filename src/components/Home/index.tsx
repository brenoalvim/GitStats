import { HomepagePattern } from './styles'

interface HomepageProps {
  stats: any
}

export default function Homepage(props: HomepageProps) {
  return (
    <HomepagePattern>
      <div className="span">
        <p>
          <strong> I'm</strong>
        </p>
        <div className="hr"></div>
        <span>
          <strong>{props.stats.name}</strong>
        </span>
        <div className="hr"></div>
        <p>{props.stats.bio}</p>
        <div className="hr"></div>
        <a href="#Stats">
          <button>My Stats</button>
        </a>
      </div>
      <div className="image">
        <img src={props.stats.avatar_url} alt="" />
      </div>
    </HomepagePattern>
  )
}
