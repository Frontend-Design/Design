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
        </Routes>
    );
}