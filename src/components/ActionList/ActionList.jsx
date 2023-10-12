import React, { useRef, useState, useEffect, useCallback } from "react";
import style from "./ActionList.module.scss";
import { ActionItem } from "../ActionItem/ActionItem";
import {
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
export const ActionList = ({ actionList }) => {
  const actionListRef = useRef();
  const scrollToBottom = useCallback(() => {
    if (actionListRef.current) {
      const scrollHeight = actionListRef.current.scrollHeight;
      const height = actionListRef.current.clientHeight;
      actionListRef.current.scrollTop = scrollHeight - height;
      console.log(height)
    }
  }, []);

  useEffect(() => {
      scrollToBottom();
  });

  return (
    <Paper elevation={3} className={style.actionList}>
      <div className={style.actionList}>
        <Typography sx={{ padding: "10px", fontWeight: "500" }}>
          Действия пользователя:
        </Typography>
        <Divider />
        <ul className={style.action_list} ref={actionListRef}>
          {actionList.length > 0 &&
            actionList.map((actionItem, idx) => {
              return (
                <ActionItem
                  key={idx}
                  item={{
                    idx: idx,
                    rate: actionItem[1],
                    type: actionItem[0],
                  }}
                />
              );
            })}
          {!actionList.length && (
            <Container
              sx={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "8px",
              }}
            >
              <SpeakerNotesOffIcon />
              <Typography>Тут пока пусто</Typography>
            </Container>
          )}
        </ul>
      </div>
    </Paper>
  );
};
