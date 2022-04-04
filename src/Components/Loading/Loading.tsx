import * as S from "./Style";

export default function Loading() {

    const nums:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <S.LoadingLayout>
            <S.LoaderBox>
                {
                    nums.map((num:number) => (
                        <S.Point num={num}/>
                    ))
                }
            </S.LoaderBox>
        </S.LoadingLayout>
    );
}