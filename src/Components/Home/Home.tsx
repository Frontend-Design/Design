import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <Link to='/loading'><p>로딩 디자인</p></Link>
            <Link to='/wavify'><p>파도 디자인</p></Link>
            <Link to='/neonlightbtn'><p>네온 버튼 디자인</p></Link>
            <Link to='/cylinder'><p>3D 원기둥</p></Link>
        </>
    );
}