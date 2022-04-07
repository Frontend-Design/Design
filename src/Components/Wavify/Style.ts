import Wave from "react-wavify";
import styled from "styled-components";

export const WavifyLayout = styled.div`
    width: 100vw;
    height: 100vh;
`

export const FigureWave = styled(Wave)`

`

export const WaterWave = styled(Wave)`
    position: fixed;
    height: 30vh;
    bottom: 0;
    left: 0;
`