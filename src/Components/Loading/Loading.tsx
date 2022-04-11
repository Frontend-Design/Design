import * as S from "./Style";

export default function Loading() {

    const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // 점 20개

    window.addEventListener('wheel', (e: WheelEvent) => {
        if (e.deltaY > 0) {
            window.scrollTo({ top: 1024, left: 0, behavior: 'smooth' });
        } else if (e.deltaY < 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      });

    return (
        <>
            <S.LoadingLayout color={Math.random() * 360}>
                <S.LoaderBox>
                    {
                        nums.map((num: number) => (
                            <S.Point num={num} />
                        ))
                    }
                </S.LoaderBox>
            </S.LoadingLayout>
            <S.LoadingLayout color={Math.random() * 360}>
                <S.LoaderBox>
                    {
                        nums.map((num) => (
                            <S.Point num={num} />
                        ))
                    }
                </S.LoaderBox>
            </S.LoadingLayout>
        </>
    );
}