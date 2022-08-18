export function Blobs() {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
    >
      <g transform="translate(160.66541290283203, 19.138137817382812)">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(254, 0, 242)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(251, 2, 128)" }}
            ></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values="
              M416.5,326.5Q432,403,356,411Q280,419,223,407.5Q166,396,119,355.5Q72,315,45,240.5Q18,166,85,123.5Q152,81,214,90.5Q276,100,336,113.5Q396,127,398.5,188.5Q401,250,416.5,326.5Z;
              M442,311Q395,372,343,426.5Q291,481,227.5,440Q164,399,100,363.5Q36,328,49.5,255Q63,182,117.5,148Q172,114,225.5,99.5Q279,85,343,101.5Q407,118,448,184Q489,250,442,311Z;
              M406.5,318Q412,386,351.5,434.5Q291,483,229.5,437.5Q168,392,132.5,349Q97,306,88.5,247Q80,188,123.5,147Q167,106,229.5,58Q292,10,335,76.5Q378,143,389.5,196.5Q401,250,406.5,318Z;
              M438.61939,303.78322Q377.24787,357.56644,329.91156,395.00895Q282.57524,432.45145,215.80977,429.07524Q149.04429,425.69903,123.54869,365.32297Q98.05309,304.94691,71.12394,240.15488Q44.19478,175.36286,86.11513,106.9824Q128.03549,38.60193,210.54429,22.72132Q293.05309,6.84072,353.42916,59.65048Q413.80522,112.46025,456.89807,181.23013Q499.99091,250,438.61939,303.78322Z;
              M438.4361,309.7657Q392.4036,369.5314,338.1805,405.1379Q283.9574,440.7444,226.074,416.0964Q168.19059,391.44841,105.33071,358.2769Q42.47082,325.10539,53.80941,253.9036Q65.14799,182.7018,111.93499,137.24329Q158.72199,91.78479,220.1166,81.94398Q281.5112,72.10318,338.6177,99.75339Q395.7242,127.4036,440.0964,188.7018Q484.4686,250,438.4361,309.7657Z;
              M416.5,326.5Q432,403,356,411Q280,419,223,407.5Q166,396,119,355.5Q72,315,45,240.5Q18,166,85,123.5Q152,81,214,90.5Q276,100,336,113.5Q396,127,398.5,188.5Q401,250,416.5,326.5Z;"
          ></animate>
        </path>
      </g>
    </svg>
  );
}