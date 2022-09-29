import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const NotFound = styled.div`
  padding: 5rem 0rem;
  text-align: center
`

export default function NotFoundPage() {
  <Head>
    
    <meta name="description" content="MrWebMD | Page Not Found"/>
    <meta name="robots" content="noindex,nofollow"/>
  </Head>
  return <NotFound>
    <Image alt="Not founds" src="https://strapi.mrwebmd.com/uploads/undraw_taken_re_yn20_7fa44b4ad5.svg" width="250px" height="250px"></Image>
    <h1>Oops, that page was not found. You can add it though because this project is <a href="https://github.com/MrWebMD/mrwebmdblog" target="_blank" rel="noreferrer">open source</a>!</h1>
  </NotFound>
}