import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import ScrollSlider, { Slide, SlideSectionProps } from "../shared/scrollSlider/ScrollSlider";
import { useScrollNavBar } from "../../hooks/useScrollNavBar";

const title = "Perfil Empresarial";
const imagePath = "../../images/bussiness-profile-page.jpg";
const description = `Est modi sapiente est error rerum aut similique facilis. In numquam eligendi rem tempore galisum a consectetur rerum.

Est pariatur fuga vel internos beatae ut corporis eveniet sit dolor reprehenderit non sunt dicta. In eius sint quo beatae eveniet id doloremque exercitationem.

Sed maxime provident aut tenetur doloremque qui voluptas omnis eos error esse et eaque laborum. Sit voluptatem quae id dicta assumenda aut tempore fugit ut laboriosam possimus ut aperiam minus id blanditiis dolor. Qui excepturi minima id eaque dolor qui autem nihil sit culpa quis vel quidem consequuntur sed minima numquam.

Sed dolorum quidem et dolore asperiores sed consectetur mollitia et quaerat recusandae. Eum quam architecto 33 rerum voluptas et facilis omnis sit ipsa amet quo dolores unde. Cum voluptas odio et earum necessitatibus eos consequuntur accusantium.`;

export const BusinessProfilePage = (props: {}) => {

  return (
      <div className="grid grid-cols-4">
        <StaticImage
          className="col-span-4 col-start-1 row-start-1"
          src={imagePath}
          alt=""
        />
        <div className="relative grid col-span-4 col-start-1 row-start-1">
          <h1 className="pt-10 pl-10 text-background text-4xl">{title}</h1>
          <div className="p-10">
            <p className="bg-surface w-1/2 p-4 box-border">{description}</p>
          </div>
        </div>
      </div>
  );
};
