import Meta from "../../components/Head/Meta";

import Link from "../../components/Head/Link";

import Title from "../../components/Head/Title";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name="User" />
      <h1>{router.query.username}</h1>
    </>
  );
}
