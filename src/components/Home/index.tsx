import { HomepagePattern } from './styles'

interface HomepageProps {
  bio: any
  name: any
  avatar: any
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
          <strong>{props.name}</strong>
        </span>
        <div className="hr"></div>
        <p>{props.bio}</p>
        <div className="hr"></div>
        <a href="#Stats">
          <button>My Stats</button>
        </a>
      </div>
      <div className="image">
        <img src={props.avatar} alt="" />
      </div>
    </HomepagePattern>
  )
}
