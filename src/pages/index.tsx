import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Link href="/design/loading">Loading</Link>
        <Link href="/design/wavify">Wavify</Link>
        <Link href="/design/neonLightBtn">Neon Light Button</Link>
        <Link href="/design/cylinder">3D Cylinder</Link>
        <Link href="/design/colorfulRain">Colorful Rain</Link>
        <Link href="/design/menuIndicator">Arrow Menu Indicator</Link>
        <Link href="/design/menu_3d">Isometric 3D Menu Effects</Link>
        <Link href="/design/bgAnimation">Background Image Loop Animation</Link>
        <Link href="/design/scrollEffects">Scroll Effects Page</Link>
        <Link href="/design/rainyCloud">Rainy Cloud</Link>
        <Link href="/design/navigationMenu">Navigation Menu</Link>
        <Link href="/design/checkBox">CheckBox</Link>
        <Link href="/design/lightCube">Light Cube</Link>
        <Link href="/design/waterDrop">Water Drop</Link>
        <Link href="/design/milkEffect">Milk Effect</Link>
        <Link href="/design/2DTo3D">2D To 3D</Link>
        <Link href="/design/spinAnimation">Spin</Link>
        <Link href="/design/neumorphismAnimation">Neumorphism Animation</Link>
        <Link href="/design/dotAnimation">Dot Animation</Link>
        <Link href="/design/energyBall">Energy Ball</Link>
        <Link href="/design/rocketAnimation">Rocket Animation</Link>
        <Link href="/design/radar">radar</Link>
        <Link href="/design/logoRadar">Logo Radar</Link>
        <Link href="/design/oceanView">Ocean View</Link>
        <Link href="/design/sliceImg">SliceImg</Link>
        <Link href="/design/textAnimation">Text Animation</Link>
        <Link href="/design/loadingAnimation">Loading Animation</Link>
        <Link href="/design/allowButtonAnimation">AllowButtonAnimation</Link>
        <Link href="/design/noiseEffect">NoiseEffect</Link>
        <Link href="/design/wavyCirclelLoaderAnimation">
          WavyCircleLoaderAnimation
        </Link>
        <Link href="/design/boxShadowLoading">BoxShadowLoading</Link>
        <Link href="/design/creativeTextAnimation">CreativeTextAnimation</Link>
        <Link href="/design/cursorEffect">Cursor Effect</Link>
        <Link href="/design/infinityLoading">Infinity Loading</Link>
        <Link href="/design/videoCube">Video Cube</Link>
      </div>

      <style jsx>{`
        div {
          display: inline-flex;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 10px;
          max-height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Home;
