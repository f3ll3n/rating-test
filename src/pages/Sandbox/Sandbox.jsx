import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { ActionList } from "../../components/ActionList/ActionList";
import { data } from "../../data/data";
import { useLocation } from "react-router-dom";
import { Events } from "../../components/Events/Events";

const initialState = {
  rating : 500,
  level: 5,
  ordersCount : 0,
  noShowCount : 0,
  noShowStreak : 0,
  lateCount : 0,
  lateStreak : 0,
  maxRating : 500,
  bonus: 0
}

export default function Sandbox({ isExample }) {
  const [actionList, setActionList] = useState([]);
  const [currId, setCurrId] = useState();
  const [profileData, setProfileData] = useState(initialState);
  const location = useLocation();
  const ref = useRef();

  const setCurrentId = () => {
    if (!currId) {
      if (location.pathname.split("/")[2]) {
        setCurrId(location.pathname.split("/")[2]);
      }
      if(currId !== false){
        setCurrId(false);
      }
      }
  };
  setCurrentId();
  
  const handleOnRatingChange = () => {
    ref.current.style.left = `${profileData.rating / 10}%`;
  };

  const calculateBonus = (bonus, maxRating) => {
    if (maxRating >= 600 && bonus < 600) {
      bonus = 600;
    }
    if (maxRating === 700 && bonus < 1300) {
      bonus = 1300;
    }
    if (maxRating === 800 && bonus < 2100) {
      bonus = 2100;
    }
    if (maxRating === 900 && bonus < 3000) {
      bonus = 3000;
    }
    if (maxRating === 1000) {
      bonus = 4000;
    }
    return bonus;
  }

  function getStatistic(action) {
      if (action == 'clear') {
        setProfileData(initialState);
        setActionList([])
        return null;
      }
      const actionArray = [];
      let actionsRating = profileData.rating;
      let actionItem = new Array(2);
      let actionOrdersCount = profileData.ordersCount;
      let actionNoShowStreak = profileData.noShowStreak;
      let actionLateStreak = profileData.lateStreak;
      let actionNoShowCount = profileData.noShowCount;
      let actionLateCount = profileData.lateCount;
      let dataArr = currId ? data[currId].events : action;
      let actionsMaxRating = profileData.maxRating;
      dataArr && dataArr.forEach((e) => {
        switch (e) {
          case 'order': 
            actionItem = [e, 20]
            actionOrdersCount++;
            actionNoShowStreak = 0;
            
            if (actionOrdersCount > 5) {
              actionItem[1] = 10;
            }
            actionsRating += actionItem[1];
            if (actionsMaxRating < actionsRating) {
              actionsMaxRating = actionsRating
            }
            break;

          case 'late':
            actionItem = [e, 0];
            actionLateStreak++;
            actionLateCount++
            if(actionLateStreak >= 3){
                actionLateStreak = 0;
                actionsRating -= 50;
                actionItem[1] = -50;
              }
            break;

          case 'ntd':
            actionNoShowStreak++;
            actionNoShowCount++
            actionsRating -= (50 * actionNoShowStreak)
            actionItem = ["ntd", -(50 * actionNoShowStreak)];
          break;
        }
        if (actionsMaxRating > 1000) {
          actionsMaxRating = 1000;
        }
        if (actionsRating > 1000) {
          actionsRating = 1000;
        }
        else if (actionsRating < 0) {
          actionsRating = 0;
        }
        actionArray.push(...actionList, actionItem);
      });
      const actionBonus = calculateBonus(profileData.bonus, actionsMaxRating);
      setProfileData({
        rating: actionsRating,
        ordersCount: actionOrdersCount,
        noShowCount: actionNoShowCount,
        noShowStreak: actionNoShowStreak,
        lateCount: actionLateCount,
        lateStreak: actionLateStreak,
        maxRating: actionsMaxRating,
        bonus: actionBonus
      })
      setActionList(actionArray)
    }

  useEffect(() => {
    if(location.pathname === '/sandbox'){
      console.log('location is sandbox')
      setCurrId(false)
      setActionList([]);
      setProfileData(initialState)
    }
  }, [location.pathname])

  

  useEffect(() => {
    getStatistic();
  }, []);

  useEffect(() => {
    handleOnRatingChange()
    console.log(profileData)
  }, [profileData.rating])  

  return (
    <div>
      <div>{profileData.rating < 200 && <div>Внимание, низкий рейтинг</div>}</div>
      <div className="rating_block">
        {data.user}
        <div className="rating_line">
          <div className="rating_value">{profileData.rating} Rate</div>
          <div ref={ref} className="rating_line_inner"></div>
        </div>
      </div>

      <div className="profile_params">
        <div className="profile_block">
          <div className="title">
            Данные профиля {isExample && currId && data[currId].user}:
          </div>
          <div className="profile_item">
            Уровень
            <span className="level_element">{Math.floor(profileData.rating / 100)}</span>
          </div>
          <div className="profile_item">Заказов выполнено: {profileData.ordersCount}</div>
          <div className="profile_item">Опозданий всего: {profileData.lateCount}</div>
          <div className="profile_item">НТД: {profileData.noShowCount}</div>
          <div className="profile_item">Максимальный рейтинг: {profileData.maxRating}</div>
          <div className="profile_item">Бонус: {profileData.bonus}</div>
        </div>
        <div className="actions_block">
          <ActionList actionList={actionList} />
        </div>
      </div>
      {location.pathname === '/sandbox' &&
        <Events
          getStatistic={getStatistic}
        />}
    </div>
      
  );
}
