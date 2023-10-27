import Success from '@/components/title'
import { NextPageContext } from 'next'
import Head from 'next/head'


export default function Home(props:any) {

  console.log(props)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> 
          <Success title={props.data.user}/>
      
      </main>
      
    </>
  )
}
export async function getServerSideProps(context : NextPageContext) {
    const data = context.query
    return { props: { data } }
  }