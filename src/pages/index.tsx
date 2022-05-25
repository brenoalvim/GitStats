import Meta from "../components/Head/Meta";

import Link from "../components/Head/Link";

import Title from "../components/Head/Title";

import { Body } from "./global";

export default function Home() {
  return (
    <Body>
      <Meta></Meta>
      <Link />
      <Title name="Home" />
    </Body>
  );
}
