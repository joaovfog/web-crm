import {
  AccountCircle,
  Close,
  CorporateFare,
  Email,
  LocalPhone,
  Title,
} from "@mui/icons-material";
import {
  Card,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  Box,
} from "@mui/material";
import { HiPlus } from "react-icons/hi";
import {
  Button,
  DatePicker,
  IconButton,
  Modal,
  TextField,
} from "../../../components";
import { useModalBusinessContext } from "../context/modalBusiness.context";

export const ModalBusiness = () => {
  const { showModalBusiness, setShowModalBusiness } = useModalBusinessContext();

  return (
    <>
      <Button
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
        }}
        size="small"
        startIcon={<HiPlus size={17} />}
        onClick={() => setShowModalBusiness(true)}
      >
        Negócio
      </Button>
      <Modal
        open={showModalBusiness}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClose={() => setShowModalBusiness(false)}
      >
        <Card
          sx={{
            width: 500,
            maxHeight: 600,
            overflowY: 'scroll'
          }}
        >
          <div style={{ background: "#f5f5f5" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  padding: 15,
                }}
              >
                Adicionar Negócio
              </Box>
              <IconButton
                onClick={() => setShowModalBusiness(false)}
                sx={{ marginRight: 1 }}
              >
                <Close />
              </IconButton>
            </div>
            <Divider sx={{ background: "#9c9c9c" }} />
          </div>
          <Grid container pl={3} pr={3} pb={3}>
            <Grid item xs={12} mb={2}>
              <TextField
                label="Pessoa de Contato"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ marginTop: 3 }}
              />
              <TextField
                label="Organização"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CorporateFare />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ marginTop: 3 }}
              />
              <TextField
                label="Título"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Title />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ marginTop: 3 }}
              />
              <Box sx={{ marginTop: 4, marginBottom: 3 }}>
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  label="Data de Fechamento Esperada"
                />
              </Box>
              <Divider />
              <Box
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginTop: 2,
                }}
              >
                Pessoa
              </Box>
              <TextField
                label="Telefone"
                placeholder="(00) 00000-0000"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhone />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ marginTop: 3 }}
              />
              <div style={{ marginTop: 5 }}>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<HiPlus size={17} />}
                >
                  Adicionar telefone
                </Button>
              </div>
              <TextField
                label="E-mail"
                placeholder="example@email.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ marginTop: 3 }}
              />
              <div style={{ marginTop: 5 }}>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<HiPlus size={17} />}
                >
                  Adicionar e-mail
                </Button>
              </div>
            </Grid>
          </Grid>
          <div style={{ background: "#f5f5f5" }}>
            <Divider sx={{ background: "#9c9c9c" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 10,
                gap: "1rem",
              }}
            >
              <Button variant="text">Cancelar</Button>
              <Button sx={{ background: '' }}>Salvar</Button>
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
};
