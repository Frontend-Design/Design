import { Route, Routes } from "react-router";
import ColorfulRain from "./Components/ColorfulRain/ColorfulRain";
import Cyilnder from "./Components/Cylinder/Cylinder";
import Home from "./Pages/Home/Home";
import Loading from "./Components/Loading/Loading";
import NeonLightBtn from "./Components/NeonLightBtn/NeonLightBtn";
import Wavify from "./Components/Wavify/Wavify";
import ScrollEffects from "./Pages/ScrollEffects/ScrollEffectsPage";
import MenuIndicator from "./Components/MenuIndicator/MenuIndicator";
import Menu_3D from "./Components/Menu_3D/Menu_3D";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import RainyCloud from "./Components/RainyCloud";
import NavigationMenu from "./Components/NavigationMenu";
import { CheckBox } from "./Components/CheckBox";
import { LightCube } from "./Components/LightCube";
import WaterDropEffect from "./Components/WaterDropEffect";
import MilkEffect from "./Components/MilkEffect";
import { TwoDToTHRD } from "./Components/2Dto3D";
import SpinAnimation from "./Components/AnimationEffects";
import NeumorphismAnimation from "./Components/NeumorphismAnimation";
import DotAnimation from "./Components/ DotAnimation";
import Energe from "./Components/EnergyBall";
import EnergeBall from "./Components/EnergyBall";
import RocketAnimation from "./Components/RocketAnimation";
import Radar from "./Components/Radar";
import LogoRadar from "./Components/LogoRadar";
import OceanView from "./Components/OceanView";
import SliceIMG from "./Components/SliceIMG";
import TextAnimation from "./Components/TextAnimation";
import LoadingAnimation from "./Components/LoadingAnimation";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/wavify" element={<Wavify />} />
      <Route path="/neonlightbtn" element={<NeonLightBtn />} />
      <Route path="/cylinder" element={<Cyilnder />} />
      <Route path="/colorfulrain" element={<ColorfulRain />} />
      <Route path="/menuindicator" element={<MenuIndicator />} />
      <Route path="/menu_3d" element={<Menu_3D />} />
      <Route path="/bganimation" element={<BackgroundAnimation />} />
      <Route path="/scrolleffects" element={<ScrollEffects />} />
      <Route path="/rainycloud" element={<RainyCloud />} />
      <Route path="/NavigationMenu" element={<NavigationMenu />} />
      <Route path="/CheckBox" element={<CheckBox />} />
      <Route path="/LightCube" element={<LightCube />} />
      <Route path="/WaterDrop" element={<WaterDropEffect />} />
      <Route path="/MilkEffect" element={<MilkEffect />} />
      <Route path="/2DTo3D" element={<TwoDToTHRD />} />
      <Route path="/SpinAnimation" element={<SpinAnimation />} />
      <Route path="/NeumorphismAnimation" element={<NeumorphismAnimation />} />
      <Route path="/DotAnimation" element={<DotAnimation />} />
      <Route path="/EnergeBall" element={<EnergeBall />} />
      <Route path="/RocketAnimation" element={<RocketAnimation />} />
      <Route path="/Radar" element={<Radar />} />
      <Route path="/LogoRadar" element={<LogoRadar />} />
      <Route path="/OceanView" element={<OceanView />} />
      <Route path="/SliceIMG" element={<SliceIMG />} />
      <Route path="/TextAnimation" element={<TextAnimation />} />
      <Route path="/LoadingAnimation" element={<LoadingAnimation />} />
    </Routes>
  );
}