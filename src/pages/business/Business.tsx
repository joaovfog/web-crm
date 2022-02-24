import { Add, CheckCircle, Error } from "@mui/icons-material";
import { Grid, Card, CardContent, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Breadcrumbs, IconButton } from "../../components";
import {
  PageContent,
  PageHeader,
  PageHeaderTitle,
} from "../../layout/components";
import { DraggableCard } from "./components/Card";
import { FilterBusiness } from "./components/Filter";
import { ModalBusiness } from "./components/ModalBusiness";
import { BusinessProvider } from "./context/business.context";

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
            <FilterBusiness />
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
            <DraggableCard
              primaryText="Negócio Sygo"
              secondaryText="Sygo"
              value="R$ 1.500.000,00"
              toolTipTitle="Agendar atividade"
              icon={<Error sx={{ color: "#ffdf5c" }} />}
            />
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
            <DraggableCard
              primaryText="Negócio Baterias Real"
              secondaryText="Baterias Real"
              value="R$ 850.000,00"
              toolTipTitle="Atividade agendada"
              icon={<CheckCircle sx={{ color: "#61c786" }} />}
            />
            <DraggableCard
              primaryText="Negócio Qualitá"
              secondaryText="Qualitá"
              value="R$ 2.850.000,00"
              toolTipTitle="Atividade agendada"
              icon={<CheckCircle sx={{ color: "#61c786" }} />}
            />
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
                    <Add sx={{ color: "text-primary" }} />
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
  <BusinessProvider>
    <BusinessContexted />
  </BusinessProvider>
);
