import Cyilnder from "../../components/Cylinder";

export default function CylinderPage() {
    return <Cyilnder
        x={3} // x축으로 회전 수
        y={2} // y축으로 회전 수
        z={1} // z축으로 회전 수
        time={10} // 애니메이션 1회 실행 시간
        size={5} // 크기
        text="css is awesome" /> // 들어갈 내용
}