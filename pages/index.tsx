import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import DashBoard from '../components/DashBoard'
import styles from '../styles/Home.module.css'
interface Data{
  name:string;
  age:number;
}
const Home: NextPage = () => {
  const [data,setData]= useState<object>({
    name:"John",
    age:30,
  })
  return (
    <DashBoard data={data} setData={setData} />
  )
}

export default Home
