import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BackgroundImage } from "../shared/BackgroundImage";

const title = "Perfil Empresarial";
const imagePath = "../../images/bussiness-profile-page.jpg";
const description = `Est modi sapiente est error rerum aut similique facilis. In numquam eligendi rem tempore galisum a consectetur rerum.

Est pariatur fuga vel internos beatae ut corporis eveniet sit dolor reprehenderit non sunt dicta. In eius sint quo beatae eveniet id doloremque exercitationem.

Sed maxime provident aut tenetur doloremque qui voluptas omnis eos error esse et eaque laborum. Sit voluptatem quae id dicta assumenda aut tempore fugit ut laboriosam possimus ut aperiam minus id blanditiis dolor. Qui excepturi minima id eaque dolor qui autem nihil sit culpa quis vel quidem consequuntur sed minima numquam.

Sed dolorum quidem et dolore asperiores sed consectetur mollitia et quaerat recusandae. Eum quam architecto 33 rerum voluptas et facilis omnis sit ipsa amet quo dolores unde. Cum voluptas odio et earum necessitatibus eos consequuntur accusantium.`;

export const BusinessProfilePage = () => {
  return (
    <BackgroundImage
      image={<StaticImage src={imagePath} alt="" />}
      content={
        <div>
          <h1 className="md:pt-10 md:pl-10 md:text-3xl">{title}</h1>
          <div className=" md:p-10 flex justify-star items-center w-full h-full">
            <div className="bg-surface/30 backdrop-blur-sm text-black md:w-2/3 p-3 md:p-14 box-border ">
              <p className="bg-surface/70 backdrop-blur-xl p-2 md:p-4 text-pretty truncate overflow-hidden h-14 md:h-full">
                {description}
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};
