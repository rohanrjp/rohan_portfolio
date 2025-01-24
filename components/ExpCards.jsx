"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RiGithubFill } from "react-icons/ri";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full  z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 "
              onClick={() => setActive(null)}
            >
              {/* <CloseIcon /> */}
              <Cross2Icon size={90} />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-3/4 sm:w-1/2 sm:mx-5 max-w-[500px] h-fit md:max-h-[70%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Python, Flask, Bootstrap, PyTorch",
    title: "QGen:Question Paper Generator",
    src: "/QGEN.jpg",
    ctaText: <RiGithubFill size={25} />,
    ctaLink: "https://github.com/rohanrjp/QGen-Question_Paper_Generator",
    content: () => {
      return (
        <p>
          QGen is an intelligent question paper generator powered by Python,
          Flask, and PyTorch, designed to streamline the creation of question
          papers from template PDFs. It scans the content from provided PDFs,
          then uses fine-tuned AI models to generate a balanced mix of
          subjective and objective questions. With capabilities for
          question-answer generation and distractor selection, QGen automates
          the process of creating comprehensive, high-quality assessments
          tailored to your needs. It is an ideal tool for educators and trainers
          who want to save time and ensure variety in question formats.
        </p>
      );
    },
  },
  {
    description: "Python,Github Actions",
    title: "News and Weather Summarizer",
    src: "/News_Weather.jpg",
    ctaText: <RiGithubFill size={25} />,
    ctaLink: "https://github.com/rohanrjp/News_Summarizer",
    content: () => {
      return (
        <p>
          The News and Weather Summarizer is a Python-based automation tool that
          sends live, summarized weather and news updates directly to your
          email. It gathers real-time data from news and weather APIs, condenses
          it into short, readable summaries, and emails it to you at your
          preferred schedule. This tool is perfect for staying informed with
          minimal effort, allowing you to quickly review top headlines and
          current weather conditions from your inbox.
        </p>
      );
    },
  },

  {
    description: "Python,Pandas,Matplotlib,Folium",
    title: "John Snow’s Ghost Map Analysis: Cholera Outbreak Data Exploration",
    src: "/John_snow_EDA.jpg",
    ctaText: <RiGithubFill size={25} />,
    ctaLink: "https://github.com/rohanrjp/JohnSnow_GhoseMap_DA",
    content: () => {
      return (
        <p>
          This data science project revisits Dr. John Snow’s groundbreaking
          19th-century analysis of the cholera outbreak in London. Using data
          visualization techniques, the project illustrates the number of
          cholera deaths and attacks before and after the removal of the Broad
          Street water pump, which was identified as the source of the outbreak.
          A key graph plots dates against the number of deaths, showcasing a
          significant decline in cases following September 8, 1854. This project
          serves as an homage to one of the first data-driven public health
          investigations, highlighting the impact of Snow’s work on modern
          epidemiology and data science.
        </p>
      );
    },
  },
  {
    description: "Python,Pandas,Matplotlib,Scikit-learn",
    title:
      "Rental DVD Duration Prediction: Regression Analysis for Inventory Optimization",
    src: "/DVD_Regression.jpg",
    ctaText: <RiGithubFill size={25} />,
    ctaLink: "https://github.com/rohanrjp/rental_DVD_regression",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          This project builds a predictive model to estimate the number of days
          a customer will rent a DVD, helping the company improve inventory
          planning and meet customer demand efficiently. Using Lasso regression
          for feature selection, two models are tested: Linear Regression and
          Random Forest Regressor. The Random Forest model achieved the best
          results, with a mean squared error (MSE) of 2.2257 on the test set,
          well within the target MSE of 3. This model provides an accurate and
          reliable solution for optimizing DVD rental durations, allowing for
          better stock management and customer service.
        </p>
      );
    },
  },
  {
    description: "Python,Pandas,Matplotlib",
    title: "Netflix Movie Duration Trends: An EDA Scatter Plot",
    src: "/Netflix_EDA.jpg",
    ctaText: <RiGithubFill size={25} />,
    ctaLink: "https://github.com/rohanrjp/Netflix_EDA",
    content: () => {
      return (
        <p>
          This project explores trends in Netflix movie durations over time,
          focusing on how movie lengths have evolved in recent years. Using a
          scatter plot created with Matplotlib and Pandas, it visually examines
          the relationship between release years and movie durations, revealing
          a noticeable trend toward shorter movie lengths in recent years. This
          straightforward analysis provides insights into content length trends
          on Netflix, offering a quick, data-driven look at the evolution of
          movie durations.
        </p>
      );
    },
  },
];
