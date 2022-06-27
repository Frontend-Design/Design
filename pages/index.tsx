import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Link href="/design/loading">Loading</Link>
        <Link href="/design/wavify">Wavify</Link>
        <Link href="/design/neonlightbtn">Neon Light Button</Link>
        <Link href="/design/cylinder">3D Cylinder</Link>
        <Link href="/design/colorfulrain">Colorful Rain</Link>
        <Link href="/design/menuindicator">Arrow Menu Indicator</Link>
        <Link href="/design/menu_3d">Isometric 3D Menu Effects</Link>
        <Link href="/design/bganimation">Background Image Loop Animation</Link>
        <Link href="/design/scrolleffects">Scroll Effects Page</Link>
        <Link href="/design/rainycloud">RainyCloud</Link>
      </div>

      <style jsx>{`
        div{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </>
  )
}

export default Home
