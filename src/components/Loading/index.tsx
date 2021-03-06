import * as S from "./style";

export default function Loading() {

    const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // 점 20개


    return (
        <>
            <S.LoadingLayout color={Math.round(Math.random() * 360)}>
                <S.LoaderBox>
                    {
                        nums.map((num: number) => (
                            <S.Point num={num} key={num} />
                        ))
                    }
                </S.LoaderBox>
            </S.LoadingLayout>
        </>
    );
}