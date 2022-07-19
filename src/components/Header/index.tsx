import { HeaderNav } from './styles'

interface HeaderProps {
  stats: any
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderNav>
      <header>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo span-logo">
            <a href="/">
              <span>
                Git<strong>Stats</strong>
              </span>
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#Home">About</a>
            </li>
            <li>
              <a href="#Stats">Stats</a>
            </li>
            <li>
              <a href={props.stats.html_url} target="_blank">GitHub</a>
            </li>
          </ul>
          <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
      </header>
    </HeaderNav>
  )
}
