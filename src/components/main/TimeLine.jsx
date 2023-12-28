import { useEffect, useState } from "react";
import { getTimelineData } from "../../configs/timeline";

export default function TimeLine() {
  const [timelineData, setTimelineData] = useState(() => []);

  useEffect(() => {
    getTimelineData(setTimelineData);
  }, []);

  const infoLeft = timelineData.filter((data, index) => {
    return !(index % 2);
  });

  const infoRight = timelineData.filter((data, index) => {
    return index % 2;
  });

  const infoLeftElements = infoLeft.map((info) => {
    return (
      <TimeInfo
        textLeft={false}
        key={info.id}
        title={info.title}
        content={info.content}
        imgUrl={info.imgUrl}
        datetime={info.datetime}
      />
    );
  });

  const infoRightElements = infoRight.map((info) => {
    return (
      <TimeInfo
        textLeft={true}
        key={info.id}
        title={info.title}
        content={info.content}
        imgUrl={info.imgUrl}
        datetime={info.datetime}
      />
    );
  });

  return (
    <section className="pt-8 pb-10">
      <article className="flex flex-col items-center gap-12 p-5">
        <h2 className="text-center text-4xl text-primary font-bold">
          Nossa timeline
        </h2>

        <div className="overflow-auto border border-primary rounded-lg w-full p-5 pt-16 pb-16 max-w-6xl">
          <div className="flex justify-center w-fit m-auto">
            <div className="pr-14 pt-10 relative border-r-8 border-secondary w-fit flex flex-col gap-14 ">
              {infoLeftElements}

              <div className="absolute w-6 aspect-square rounded-full bg-secondary -right-4 -top-3"></div>
              <div className="absolute w-6 aspect-square rounded-full bg-secondary -right-4 -bottom-3"></div>
            </div>
            <div className="pt-44 pl-14 w-fit flex flex-col gap-14 ">
              {infoRightElements}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function TimeInfo(props) {
  return (
    <div
      className={`flex w-[28rem] gap-8 relative ${
        props.textLeft ? "flex-row-reverse" : ""
      } `}
    >
      <article
        className={`flex flex-col gap-2 ${
          props.textLeft ? "text-left" : "text-right"
        } `}
      >
        <mark className="text-primary font-bold text-base">
          {props.datetime}
        </mark>

        <h2 className="text-primary font-bold text-2xl max-w-[25ch] line-clamp-2">
          {props.title}
        </h2>

        <p className="text-primary font-normal text-base max-w-[40ch] line-clamp-3">
          {props.content}
        </p>

        <a
          href="#"
          className="font-medium cursor-pointer text-primary hover:text-secondary transition duration-200 text-base"
        >
          Saber mais
        </a>
      </article>

      <picture className="w-28 z-10">
        <img
          src={process.env.PUBLIC_URL + props.imgUrl}
          className="w-28 aspect-square object-cover rounded-full border-secondary border-8"
        />
      </picture>

      <div
        className={`absolute w-16 h-3 bg-secondary -right-14 top-9 z-0 ${
          props.textLeft && "-left-14"
        } `}
      ></div>
    </div>
  );
}
