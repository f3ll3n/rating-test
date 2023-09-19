import { useState, useRef, useEffect } from "react";
import { Events } from "../../components/Events/Events";
import { ActionList } from "../../components/ActionList/ActionList";

export default function Sandbox({ data, isExample }) {
    const [rating, setRating] = useState(500);
    const [ordersCount, setOrdersCount] = useState(0);
    const [errorStreak, setErrorstreak] = useState(0);
    const [showLateCount, setShowLateCount] = useState(0);
    const [noShowStreak, setNoshowstreak] = useState(1);
    const [action, setAction] = useState();
    const [actionList, setActionList] = useState([]);

    const ref = useRef();
  
    const changeRating = (action, points, inputValue, isAction) => {
      switch(action){
        case 'input':
          if(inputValue > 1000){
            setRating(1000)
          }
          else if(inputValue < 0){
            setRating(0)
          }
          else{
            setRating(inputValue);
          }
          break;
        case 'order':
          setOrdersCount(ordersCount + 1);
          rating + points <= 1000 ? setRating(rating + points) : setRating(1000);
          if (isAction) {
            setAction({ action, points, well: '+' });
          }
          break;
        case 'ntd':
        case 'late':
          if (errorStreak >= 2 && action == 'late') {
            isAction && setAction({ action, points: 50, well: '-' })
            setErrorstreak(0)
            rating - points >= 0 ? setRating(rating - points) : setRating(0);
            break;
          }
          else if (errorStreak < 2 && action == 'late'){
            isAction && setAction({ action })
          }
          else if(action == 'ntd'){
            isAction && setAction({ action, points, well: '-' })
            rating - points >= 0 ? setRating(rating - points) : setRating(0);
          }
          break;
        case 'clear':
          setActionList([])
          setRating(500);
          setOrdersCount(0);
          setErrorstreak(0);
          setNoshowstreak(1);
          setShowLateCount(0)
          break;
      }
      handleOnRatingChange();
    };
   
    const handleOnRatingChange = () => {
      ref.current.style.left = `${rating / 10}%`;
    };
    
    useEffect(() => {
      if(actionList.length){
        const actionArr = [...actionList, action];
        setActionList(actionArr);
      }
      else if(action){
        setActionList([action])
      }
    }, [action, setAction]);

    useEffect(() => {
      handleOnRatingChange();
    });
  
    return (
      <div>
        <div>{rating < 200 && <div>Внимание, низкий рейтинг</div>}</div>
        <div className="rating_block">
          <div className="rating_line">
            <div className="rating_value">{rating} Rate</div>
            <div ref={ref} className="rating_line_inner"></div>
          </div>
        </div>

        <div className="profile_params">
          <div className="profile_block">
            <div className="title">Данные профиля:</div>
            <div className="profile_item">
              Уровень
              <span className="level_element">{Math.floor(rating / 100)}</span>
            </div>
            <div className="profile_item">Заказов выполнено: {ordersCount}</div>
            <div className="profile_item">Опозданий всего: {showLateCount}</div>
            <div className="profile_item">НТД: {noShowStreak - 1}</div>
          </div>
          <div className="actions_block">
            <ActionList actionList={actionList}/>
          </div>
        </div>

        <Events 
          changeRating={changeRating}
          setNoshowstreak={setNoshowstreak}
          setErrorStreak={setErrorstreak}
          setShowLateCount={setShowLateCount}
          data={{ noShowStreak, errorStreak, ordersCount, showLateCount, rating, isExample}}/>
      </div>
    );
  }