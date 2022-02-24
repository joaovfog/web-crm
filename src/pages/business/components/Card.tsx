import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import Draggable from "react-draggable";
import { IconButton } from "../../../components";

export const DraggableCard = ({
  primaryText,
  secondaryText,
  value,
  toolTipTitle,
  icon,
}: any) => {
  return (
    <Draggable axis="both">
      <Card style={{ marginBottom: 15, borderLeft: '4px solid #ff5811' }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            {primaryText}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {secondaryText}
            </Typography>
            <IconButton sx={{ marginTop: -1.3 }}>
              <Tooltip
                title={toolTipTitle}
                placement="right-start"
                enterDelay={300}
                leaveDelay={200}
              >
                {icon}
              </Tooltip>
            </IconButton>
          </div>
          <Grid container>
            <Grid item xs={1}>
              <img
                src="src/assets/images/user.png"
                alt="user"
                style={{ margin: "auto", height: 23, width: 23 }}
              />
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#747678",
                  fontWeight: 600,
                  marginTop: 0.3,
                  marginLeft: 0.8,
                }}
                color="text.secondary"
                gutterBottom
              >
                {value}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Draggable>
  );
};
