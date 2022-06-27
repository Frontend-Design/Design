import * as S from "./Style";

export default function Menu_3D() {

    const lists: Array<string> = ["홈", "정보", "글 작성", "프로필", "설정"];

    return (
        <S.MenuLayout>
            <S.MenuContainer>
                {
                    lists.map((list: string, idx: number) =>
                        <S.MenuWrapper num={idx} key={idx}><a>{list}</a></S.MenuWrapper>
                    )
                }
            </S.MenuContainer>
        </S.MenuLayout>
    );
}