import Wave from "react-wavify";
import styled from "styled-components";

export const WavifyLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const Wavify = styled(Wave)`
    width: auto;
    height: auto;
    /* position: absolute; */
    /* bottom: 0; */
`