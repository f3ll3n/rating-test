import { Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import style from './Events.module.scss';
export const Events = ({ getStatistic }) => {
  return (
    <div className="options_navigation">
      <Grid container spacing={0}>
        <Grid xs={12} item>
          <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <Button
            className={style.button}
            variant="outlined"
            onClick={() => getStatistic(["order"])}
          >
            + 1 заказ
          </Button>
          <Button
            className={style.button}
            variant="outlined"
            onClick={() => getStatistic(["late"])}
          >
            Опоздание
          </Button>
          <Button
            className={style.button}
            variant="outlined"
            onClick={() => getStatistic(["ntd"])}
          >
            НТД
          </Button>
          <Button
            className={style.button}
            variant="outlined"
            onClick={() => getStatistic("clear")}
          >
            Очистить данные
          </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
