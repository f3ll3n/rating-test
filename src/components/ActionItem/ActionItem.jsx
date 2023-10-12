import React, { useState, useEffect } from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ErrorIcon from "@mui/icons-material/Error";
import WorkIcon from "@mui/icons-material/Work";
import DangerousIcon from "@mui/icons-material/Dangerous";
import style from "./ActionItem.module.scss";
const initialValue = {
  title: "",
  textContent: "",
  color: "",
};

export const ActionItem = ({ item }) => {
  const [status, setStatus] = useState(initialValue);

  useEffect(() => {
    let data = { ...initialValue };
    data.textContent = `+${item.rate} рейтинг (${item.rate / 100})`;
    if (item.type === "order") {
      data.title = `${item.idx + 1}. Заказ`;
      data.color = "#5BC962";
    }
    if (item.type === "late") {
      data.title = `${item.idx + 1}. Опоздание`;
      data.textContent = `${item.rate} рейтинг (${item.rate / 100})`;
      data.color = "#FFD073";
      if (item.rate === 0) {
        data.textContent = "";
      }
    }
    if (item.type === "ntd") {
      data.title = `${item.idx + 1}. НТД`;
      data.textContent = `${item.rate} рейтинг (${item.rate / 100})`;
      data.color = "#5770AB ";
    }
    setStatus(data);
  }, [item]);

  return (
    <Paper elevation={1} sx={{ margin: "5px 0px" }}>
      <ListItem className={style.list_item}>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: status.color }}>
            {item.type === "order" && <WorkIcon />}
            {item.type === "late" && <ErrorIcon />}
            {item.type === "ntd" && <DangerousIcon />}
          </Avatar>
        </ListItemAvatar>
        <Divider light />
        <ListItemText primary={status.title} secondary={status.textContent} />
      </ListItem>
    </Paper>
  );
};
