import { useEffect, useRef } from "react";
import * as S from "./style";

export default function BackgroundImageSizeChange() {
  const headerRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      (headerRef.current.style.backgroundSize =
        160 - +window.pageYOffset / 12 + "%"),
        (headerRef.current.style.opacity = 1 - +window.pageYOffset / 700 + "");
    });
  }, []);

  return (
    <S.bg>
      <S.Header ref={headerRef} />
      <S.Section>
        <h2>Background Size Change into Small when Scrolling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eveniet
          debitis? Odit magnam inventore repudiandae officiis deserunt quaerat,
          ipsam perspiciatis corrupti cumque facilis. Ipsa ex earum saepe sed,
          corrupti officiis perferendis in natus quidem. Tempora velit enim
          alias nobis magnam voluptatibus. Beatae, quam soluta cupiditate minus
          ea omnis corporis exercitationem ut porro doloribus rerum excepturi
          aliquid dolorum repellendus atque nulla, molestias provident eius
          recusandae adipisci similique dicta sint repellat fuga. Dicta voluptas
          vero asperiores quidem minus facere, perferendis placeat aliquam,
          officia excepturi magnam ipsam veritatis, explicabo fuga doloremque
          non deserunt modi cum architecto eveniet at quis odit similique
          reprehenderit. Iste error maxime rerum, dolorum possimus quas quidem
          eius illo sequi debitis sapiente repellat, corporis molestiae
          asperiores ratione ducimus perspiciatis qui quisquam pariatur! Totam
          corporis beatae consequuntur fugiat, obcaecati voluptatum qui voluptas
          ducimus porro quos repudiandae aliquid cumque, quisquam inventore ex
          distinctio id deleniti molestiae! Architecto quam consectetur atque
          saepe corporis ut id, ratione similique temporibus ea. Fugit dicta
          eligendi, deleniti quos ipsum pariatur! Beatae nostrum culpa tempora
          unde reprehenderit reiciendis ipsum laboriosam nam obcaecati officiis
          nihil, ea id dignissimos voluptatum repudiandae necessitatibus cumque.
          Sunt reiciendis id recusandae ut, obcaecati fuga officia ratione
          dolore veniam amet soluta libero quis molestiae odio tenetur doloribus
          distinctio eligendi ad delectus minima omnis necessitatibus
          accusantium qui exercitationem! Assumenda soluta accusantium nemo
          quaerat voluptate omnis, earum eum deleniti, porro eius fuga
          perferendis corrupti! Consectetur, recusandae. Pariatur reprehenderit
          repellendus recusandae saepe culpa sint itaque commodi atque fugit eos
          cupiditate vero, dolores explicabo debitis esse laudantium maxime vel
          unde corrupti dolore expedita dolor ullam dicta. Ea in earum molestias
          totam id. Unde, suscipit eos quo fuga quaerat blanditiis? Magnam,
          soluta animi doloribus quam id corrupti fugiat dicta doloremque.
          Itaque laboriosam animi ipsum perferendis deleniti harum laudantium
          tempora, maxime a distinctio quibusdam aliquid voluptatum, voluptates
          error nobis soluta sapiente, quidem ullam dolores delectus quo?
          <br />
          <br />
          Beatae, non quo! Debitis, cumque commodi doloribus totam repudiandae
          mollitia minus veritatis libero consectetur, illum fugit placeat
          optio, aperiam voluptatum ut excepturi deleniti quas repellendus fuga.
          Laborum, tenetur adipisci dignissimos sed debitis deserunt tempora
          voluptatum quae corrupti enim earum aut eum, animi delectus sapiente
          suscipit laudantium odio repellat voluptatem iusto ullam. Fugiat
          iusto, cum autem temporibus ipsam velit quod unde vero, aliquid
          delectus illo sapiente dignissimos eaque exercitationem. Ipsam eaque,
          reiciendis molestias asperiores animi provident sequi quam illo,
          repellat, nihil nesciunt sit ex consectetur nam. Placeat odit,
          perferendis exercitationem hic reiciendis eum incidunt voluptas,
          corporis quos atque tempore vitae nostrum suscipit aliquam alias
          voluptates repellat magni repellendus ab commodi maiores vero? Maiores
          laudantium asperiores deleniti libero cumque totam, aliquam id est
          culpa recusandae magnam cupiditate repudiandae doloremque tempore
          praesentium numquam sapiente nemo sint natus soluta neque. Quia facere
          ducimus, assumenda minima alias molestiae et, porro nulla incidunt
          dolor sapiente? Ad tenetur nisi unde veniam vitae sapiente ab,
          nesciunt quae voluptates sunt! Sit exercitationem maxime veniam iure
          facere deserunt accusamus, iusto fuga quisquam nesciunt beatae earum
          sunt consectetur optio voluptate rerum harum eum. Illum neque
          doloribus temporibus corrupti sapiente tenetur sunt. Quia eum ex
          minima eligendi.
        </p>
      </S.Section>
    </S.bg>
  );
}
