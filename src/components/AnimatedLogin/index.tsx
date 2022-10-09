import * as S from "./style";

export default function AnimatedLogin() {
  return (
    <S.bg>
      <S.Box>
        <S.Form>
          <h2>Sign in</h2>
          <S.InpuBox>
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </S.InpuBox>
          <S.InpuBox>
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </S.InpuBox>
          <S.Links>
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </S.Links>
          <input type="submit" value="Login" />
        </S.Form>
      </S.Box>
    </S.bg>
  );
}
