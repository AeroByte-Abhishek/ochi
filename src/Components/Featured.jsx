import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 pb-20 border-b-[1px] border-zinc-700">
        <h1 className="text-7xl tracking-tight font-['Neue_Montreal']">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex mt-10 gap-10">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="z-[9] left-full flex overflow-hidden absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-8xl leading-none tracking-tighter font-semibold text-[#cdea68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="z-[9] right-full flex overflow-hidden absolute top-1/2 -translate-y-1/2 translate-x-1/2 text-8xl leading-none tracking-tighter font-semibold text-[#cdea68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
