import axios from "axios";
import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../Utils/requests";

export default function Home({results}) {
  
  return (
    <>
      <div>
        <Head>
          <title>Hulu App</title>
        </Head>

        <Header />
        <Nav />
        <Results results={results}/>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  

  const request = await fetch(`https://api.themoviedb.org/3${
         requests[genre]?.url || requests.fetchTrending.url
       }`)
  const data = await request.json()





  return { props: { results: data.results} };
}
