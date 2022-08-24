import * as S from "./style";

export default function QRCodeScanner() {
  return (
    <S.bg>
      <S.Scan>
        <S.Qrcode></S.Qrcode>
        <S.Title>QR Code Scanning...</S.Title>
        <S.Border></S.Border>
      </S.Scan>
    </S.bg>
  );
}
