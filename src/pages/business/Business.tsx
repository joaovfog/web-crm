import { Add, Check, CheckCircle, Error } from "@mui/icons-material";
import { Grid, Card, CardContent, Typography, Tooltip } from "@mui/material";
import { HiPlus } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import { Breadcrumbs, Button, IconButton, TextField } from "../../components";
import {
  PageContent,
  PageHeader,
  PageHeaderTitle,
} from "../../layout/components";
import { ModalBusiness } from "./components/ModalBusiness";
import { ModalBusinessProvider } from "./context/modalBusiness.context";

const BusinessContexted = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle title="Negócios" />
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/home" color="#262626" style={{ color: "#595959" }}>
            Início
          </Link>
          <span style={{ color: "#595959" }}>Negócios</span>
        </Breadcrumbs>
      </PageHeader>
      <PageContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <ModalBusiness />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 550,
                marginRight: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              R$ 5.200.000,00 - 3 negócios
            </Typography>
            <Button size="small" startIcon={<MdFilterList size={18} />}>
              Filtro
            </Button>
          </div>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Card
              sx={{
                marginBottom: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                background: "#f7f7f7",
                height: 80,
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: -5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    Qualificado
                  </Typography>
                  <IconButton sx={{ marginTop: "-4px" }}>
                    <Add sx={{ color: "text-primary" }} />
                  </IconButton>
                </div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  R$ 1.500.000,00 - 1 negócio
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  Negócio Sygo
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Sygo
                  </Typography>
                  <IconButton sx={{ marginTop: -1.3 }}>
                    <Tooltip
                      title="Agendar Atividade"
                      placement="right-start"
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <Error sx={{ color: "#ffdf5c" }} />
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
                      R$ 1.500.000,00
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              sx={{
                marginBottom: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                background: "#f7f7f7",
                height: 80,
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: -5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    Contatado
                  </Typography>
                  <IconButton sx={{ marginTop: "-4px" }}>
                    <Add sx={{ color: "text-primary" }} />
                  </IconButton>
                </div>
                <Typography color="text.secondary">R$ 0,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              sx={{
                marginBottom: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                background: "#f7f7f7",
                height: 80,
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: -5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    Demo Agendada
                  </Typography>
                  <IconButton sx={{ marginTop: "-4px" }}>
                    <Add sx={{ color: "text-primary" }} />
                  </IconButton>
                </div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  R$ 3.700.000,00 - 1 negócio
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  Negócio Baterias Real
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Baterias Real
                  </Typography>
                  <IconButton sx={{ marginTop: -1.3 }}>
                    <Tooltip
                      title="Atividade Agendada"
                      placement="right-start"
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <CheckCircle sx={{ color: "#61c786" }} />
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
                      R$ 850.000,00
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card sx={{ marginTop: 1 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: "Trebuchet MS, sans-serif",
                  }}
                >
                  Negócio Qualitá
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Qualitá
                  </Typography>
                  <IconButton sx={{ marginTop: -1.3 }}>
                    <Tooltip
                      title="Atividade Agendada"
                      placement="right-start"
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <Error sx={{ color: "#ffdf5c" }} />
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
                      R$ 2.850.000,00
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              sx={{
                marginBottom: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                background: "#f7f7f7",
                height: 80,
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: -5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    Proposta Feita
                  </Typography>
                  <IconButton sx={{ marginTop: "-4px" }}>
                    <Add />
                  </IconButton>
                </div>
                <Typography color="text.secondary">R$ 0,00</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageContent>
    </>
  );
};

export const BusinessPage = () => (
  <ModalBusinessProvider>
    <BusinessContexted />
  </ModalBusinessProvider>
);
