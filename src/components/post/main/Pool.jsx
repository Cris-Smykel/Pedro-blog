import { useState } from "react";

export default function Pool(props) {
  const [showThxMessage, setShowThxMessage] = useState(() => false);

  if (!props.pool) {
    return;
  }

  const poolContainers = props.pool.answers.map((answer) => {
    const keys = Object.keys(answer);

    const answerKey = answer[keys[1]];

    return (
      <PoolContainer
        key={keys[1]}
        option={keys[1]}
        answer={answerKey}
        selected={answer[keys[0]]}
        handleSelectAnswer={() => {
          handleSelectAnswer(setShowThxMessage, props.setPostData, keys[1]);
        }}
      />
    );
  });

  return (
    <div>
      <ShowSelectedConfirm showThxMessage={showThxMessage} />
      <form>
        <div className="rounded-md">
          <div className="p-4 bg-primary rounded-t-md">
            <h2 className="text-white font-bold text-lg ">
              {props.pool.question}
            </h2>
          </div>

          <div className="p-4 pt-8 pb-8 bg-white border border-primary rounded-b-md flex flex-col gap-5">
            {poolContainers}
          </div>
        </div>
      </form>
    </div>
  );
}

function PoolContainer(props) {
  return (
    <div
      onClick={props.handleSelectAnswer}
      className={`rounded-3xl border-primary pool-option ${
        props.selected && "active"
      } border cursor-pointer p-3 flex items-center gap-4`}
    >
      <mark className="rounded-full font-bold text-base text-primary w-8 h-8 flex items-center justify-center border border-primary">
        {props.option}
      </mark>

      <p className="font-medium text-base text-primary">{props.answer}</p>
    </div>
  );
}

function ShowSelectedConfirm(props) {
  return (
    <div
      className={`fixed ${
        props.showThxMessage ? "top-0" : "-top-40"
      } transition-all duration-500 z-30 w-full max-w-[40rem] left-1/2 transform -translate-x-1/2 p-6 bg-primary`}
    >
      <h3 className="text-white font-medium text-center text-lg">
        Obrigado pelo feedback!
      </h3>
    </div>
  );
}

function handleSelectAnswer(setShowThxMessage, setPostData, selected) {
  setShowThxMessage(true);

  const intervalId = setInterval(() => {
    setShowThxMessage(false);
    clearInterval(intervalId);
  }, 2000);

  setPostData((prevPostData) => {
    const newAnswersData = prevPostData.pool.answers.map((answer) => {
      const key = Object.keys(answer)[1];
      return { ...answer, selected: key === selected ? true : false };
    });

    return {
      ...prevPostData,
      pool: { ...prevPostData.pool, answers: newAnswersData },
    };
  });
}
