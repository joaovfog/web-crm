import { Close } from "@mui/icons-material";
import { Box, Card, Divider, Grid } from "@mui/material";
import { MdFilterList } from "react-icons/md";
import { Button, IconButton, Modal, Select } from "../../../components";
import { useBusinessContext } from "../context/business.context";

export const FilterBusiness = () => {
  const { showBusinessFilter, setShowBusinessFilter } = useBusinessContext();

  return (
    <>
      <Button
        size="small"
        startIcon={<MdFilterList size={18} />}
        onClick={() => setShowBusinessFilter(true)}
      >
        Filtros
      </Button>
      <Modal
        open={showBusinessFilter}
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClose={() => setShowBusinessFilter(false)}
      >
        <Card
          sx={{
            width: 500,
            maxHeight: 600,
          }}
        >
          <div style={{ background: "#f5f5f5" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: 22,
                  fontWeight: 600,
                  padding: 2,
                }}
              >
                Filtros
              </Box>
              <IconButton
                onClick={() => setShowBusinessFilter(false)}
                sx={{ marginRight: 1 }}
              >
                <Close />
              </IconButton>
            </div>
            <Divider sx={{ background: "#9c9c9c" }} />
          </div>
          <Box sx={{ padding: 3 }}>
            <Select
              label="Status"
              options={[
                { id: "1", name: "Negócios com mais de 3 meses" },
                { id: "2", name: "Negócios estagnados" },
                { id: "3", name: "Todos os negócios apagados" },
                { id: "4", name: "Todos os negócios em aberto" },
              ]}
              variant="outlined"
            />
          </Box>
          <div style={{ background: "#f5f5f5" }}>
            <Divider sx={{ background: "#9c9c9c" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 10,
                gap: "1rem",
                marginRight: 7
              }}
            >
              <Button variant="text" size="small">Cancelar</Button>
              <Button sx={{ background: "" }} size="small">Salvar</Button>
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
};
