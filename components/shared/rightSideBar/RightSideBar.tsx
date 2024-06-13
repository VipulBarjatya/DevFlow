import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const hotQuestions = [
  { _id: "1", title: "How do you use express as a custom server in NextJs?" },
  { _id: "2", title: "Is it only me or the font is bolder than necessary?" },
  { _id: "3", title: "Redux Toolkit Not Updating State as Expected" },
  { _id: "4", title: "Can I get the course for free?" },
  { _id: "5", title: "Async/Await Function Not Handling Errors Properly" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", totalQuestions: 5 },
  { _id: "2", name: "React", totalQuestions: 3 },
  { _id: "3", name: "Next", totalQuestions: 2 },
  { _id: "4", name: "Vue", totalQuestions: 7 },
  { _id: "5", name: "Angular", totalQuestions: 8 },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/`}
              className="flex cursor-pointer items-center justify-between gap-7"
              key={question._id}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
