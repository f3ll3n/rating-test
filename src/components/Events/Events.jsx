import { useRef, useEffect } from "react";
import { data } from "../../data/data";

export const Events = ({getStatistic}) => {
//   const inputRef = useRef();

//   const handleKeyDown = (event) => {
//     const points = 0;
//     if (event.key === "Enter") {
//       props.changeRating("input", points, inputRef.current.value);
//       inputRef.current.value = "";
//     }
//   };

  return (
    <div className="options_navigation">
        <>
          <div className="title">Действия:</div>
          <div className="buttons_block">
            <button onClick={() => getStatistic(['order'])}>
              + 1 заказ
            </button>
            <button onClick={() => getStatistic(['late'])}>
              Опоздание
            </button>
            <button onClick={() => getStatistic(['ntd'])}>
              НТД
            </button>
            <button onClick={() => getStatistic(['clear'])}>
              Очистить данные
            </button>
            {/* <input
              className="input"
              ref={inputRef}
              placeholder="Введите рейтинг"
              onKeyDown={() => handleKeyDown(event)}
              type="text"
            ></input> */}
          </div>
        </>
    </div>
  );
};
