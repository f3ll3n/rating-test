import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { ActionList } from "../../components/ActionList/ActionList";
import { data } from "../../data/data";
import { Events } from "../../components/Events/Events";
  import style from './Sandbox.module.scss'
import InfoBlock from "../../components/InfoBlock/InfoBlock";

const initialState = {
  rating: 500,
  level: 5,
  ordersCount: 0,
  noShowCount: 0,
  noShowStreak: 0,
  lateCount: 0,
  lateStreak: 0,
  maxRating: 500,
  bonus: 0,
};

const initialObject = {
  events: [],
  points: [],
};

export default function Sandbox({ isExample }) {
  const [actionList, setActionList] = useState([]);
  const [actionObject, setActionObject] = useState(initialObject);
  const [profileData, setProfileData] = useState(initialState);
  const [eventsHistory, setEventsHistory] = useState(['start'])
  const [ratingHistory, setRatingHistory] = useState([500]);
  const [userBadge, setUserBadge] = useState('');
  const [currId, setCurrId] = useState('')
  const location = useLocation();
  const ref = useRef();

  const setCurrentId = () => {
    const currentId = location.pathname.split("/")[2];
    setCurrId(currentId || false);
  };

  useEffect(() =>{
    console.log('currId ' + currId)
    if(currId){
      setUserBadge(data[currId].user)
    }
    if(location.pathname === "/sandbox"){
      setUserBadge('')
    }
  }, [currId, location])

  useEffect(() => {
    setCurrentId();
  }, [location.pathname]);

  const calculateBonus = (bonus, maxRating) => {
    if (maxRating === 1000) {
      return 4000
    }
    else if(maxRating >= 900){
      return Math.max(bonus, 3000);
    }
    else if(maxRating >= 800){
      return Math.max(bonus, 2100);
    }
    else if(maxRating >= 700){
      return Math.max(bonus, 1300);
    }
    else if(maxRating >= 600){
      return Math.max(bonus, 600);
    } 
    else{
      return bonus
    }
      
  };

  const getStatistic = (action) => {
    const currPoints = [];
    const currActionState = [...actionObject.events];
    let profileDataCopy = { ...profileData };
    let actionsMaxRating = profileDataCopy.maxRating;
    let actionsRating = profileDataCopy.rating;
    let actionOrdersCount = profileDataCopy.ordersCount;
    let actionNoShowStreak = profileDataCopy.noShowStreak;
    let actionLateStreak = profileDataCopy.lateStreak;
    let actionNoShowCount = profileDataCopy.noShowCount;
    let actionLateCount = profileDataCopy.lateCount;
    let actionEventsHistory = eventsHistory;
    let actionRatingHistory = ratingHistory;
    let actionItem = [];
    let currActionList = actionList;
    if (action === "clear") {
      setEventsHistory(['start']);
      setRatingHistory([500]);
      profileDataCopy = initialState;
      setActionObject(initialObject);
      setActionList([]);
      setProfileData(profileDataCopy);
      return null;
    }
    actionItem = [action, 20];
    const dataArr = currId ? data[currId].events : action;
    dataArr &&
      dataArr.forEach((e) => {
        switch (e) {
          case "order":
            actionOrdersCount++;
            actionNoShowStreak = 0;
            actionItem = [e, 20];
            if (actionOrdersCount > 5) {
              actionItem = [e, 10];
            }
            actionsRating += actionItem[1];
            if (actionsMaxRating < actionsRating) {
              actionsMaxRating = actionsRating;
            }
            break;

          case "late":
            actionLateStreak++;
            actionLateCount++;
            actionItem = [e, 0];
            if (actionLateStreak >= 3) {
              actionLateStreak = 0;
              actionsRating -= 50;
              actionItem = [e, -50];
            }
            break;

          case "ntd":
            actionNoShowStreak++;
            actionNoShowCount++;
            actionsRating -= 50 * actionNoShowStreak;
            actionItem = ["ntd", -(50 * actionNoShowStreak)];
            break;
        }

        if (actionsMaxRating > 1000) {
          actionsMaxRating = 1000;
        }

        if (actionsRating > 1000) {
          actionsRating = 1000;
        } else if (actionsRating < 0) {
          actionsRating = 0;
        }
        actionEventsHistory.push(e)
        actionRatingHistory.push(actionsRating)
        currPoints.push(actionsRating);
        currActionState.push(e);
        currActionList.push(actionItem)
        console.log(actionList)
      });
    
    setActionList(currActionList);
    const actionBonus = calculateBonus(profileDataCopy.bonus, actionsMaxRating);
    setProfileData({
      ...profileDataCopy,
      rating: actionsRating,
      ordersCount: actionOrdersCount,
      noShowCount: actionNoShowCount,
      noShowStreak: actionNoShowStreak,
      lateCount: actionLateCount,
      lateStreak: actionLateStreak,
      maxRating: actionsMaxRating,
      bonus: actionBonus,
    });
    setEventsHistory(actionEventsHistory);
    setRatingHistory(actionRatingHistory);

    console.log(actionEventsHistory, actionRatingHistory)
  };

  useEffect(() => {
    if (location.pathname === "/sandbox" || location.pathname === `/examples/${currId}`) {
      getStatistic("clear");
      setCurrId(false);
    }

  }, [location.pathname, currId]);

  useEffect(() => {
    getStatistic();
    return () => {
      getStatistic("clear");
    };
  }, [currId]);


  useEffect(() => {
    ref.current.style.left = `${profileData.rating / 10}%`;
  }, [profileData.rating]);

  return (
    <div style={{padding: '0 0 70px 0'}}>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={12} >
          <Grid container spacing={2}>
            <Grid item  lg={6} sm={12} xs={12}>
              <Paper elevation={3} sx={{padding: '0 0 17px 0'}} className={style.block}>
                  <Typography sx={{ padding: "10px", fontWeight: "500" }}>
                     Шкала рейтинга
                  </Typography>
                  <Divider />
                <div className={style.rating_block}>
                  {data.user}
                  <div>
                    <Typography className="rating_value" sx={{color: "white", zIndex: '40', position: 'relative'}}>
                      {profileData.rating} Rate
                    </Typography>
                    <div ref={ref} className={style.rating_line}></div>
                    <Typography className="profile_item"  sx={{color: "white", zIndex: '40', position: 'relative'}}>
                    Уровень {Math.floor(profileData.rating / 100)}
                  </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
            <Paper elevation={3} className={style.block}>
              <div className="profile_params">
                <div className="profile_block">
                  <Typography sx={{ padding: "10px", fontWeight: "500" }}>
                     Данные пользователя{userBadge&&` ${userBadge}`}:
                  </Typography>
                  <Divider />
                  <div style={{padding: "20px"}}>
                  
                  <Typography className="profile_item">
                    Заказов выполнено: {profileData.ordersCount}
                  </Typography>
                  <Typography className="profile_item">
                    Опозданий всего: {profileData.lateCount}
                  </Typography>
                  <Typography className="profile_item">
                    НТД: {profileData.noShowCount}
                  </Typography>
                  <Typography className="profile_item">
                    Максимальный рейтинг: {profileData.maxRating}
                  </Typography>
                  <Typography className="profile_item">
                    Бонус: {profileData.bonus}
                  </Typography>

                </div>
              </div>
              </div>
              </Paper>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} >
              {eventsHistory && (
                <Paper elevation={3} sx={{padding: '20px 16px'}} className={style.block}>
                <Chart
                  type="line"
                  data={{
                    labels: eventsHistory,
                    datasets: [
                      {
                        label: "Рейтинг",
                        data: ratingHistory,
                      },
                    ],
                  }}
                />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={style.block}>
          <div className="actions_block">
            <ActionList actionList={actionList} />
          </div>
        </Grid>
        
        <Grid item xs={12} sx={{ margin: "auto" }} >
          <div className={style.block}>
            <InfoBlock props={{rating: profileData.rating, orders: profileData.ordersCount, action: actionList, maxRating: profileData.maxRating}} />
          </div>
        </Grid>
        <Grid item xs={12} sx={{ margin: "auto" }} >
          <div className={style.navigation}>
          {location.pathname === "/sandbox" && (
            <Events getStatistic={getStatistic} />
          )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

