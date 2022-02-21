import { Chip, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { HiPlus } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import { Breadcrumbs, Button, Table, TableProvider } from "../../components";
import {
  PageContent,
  PageHeader,
  PageHeaderTitle,
} from "../../layout/components";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Título",
    minWidth: 200,
  },
  {
    field: "nextActivity",
    headerName: "Próxima Atividade",
    minWidth: 200,
  },
  {
    field: "tags",
    headerName: "Etiquetas",
    minWidth: 150,
    renderCell: () => {
      return <Chip label="Morno" color="warning" size="small" />;
    },
  },
  {
    field: "source",
    headerName: "Fonte",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Data",
    width: 150,
  },
  {
    field: "owner",
    headerName: "Proprietário",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "#",
    headerName: "Ação",
  },
];

const rows = [
  {
    id: "1",
    title: "Lead Eme Tec",
    nextActivity: "Nenhuma atividade",
    tags: "MORNO",
    source: "Criado manualmente",
    createdAt: "Há 2 horas",
    owner: "João",
  },
];

export const LeadsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle title="Leads" />
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/home" color="#262626" style={{ color: "#595959" }}>
            Início
          </Link>
          <span style={{ color: "#595959" }}>Leads</span>
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
          <Button
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
            }}
            size="small"
            startIcon={<HiPlus size={17} />}
          >
            Lead
          </Button>
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
              1 lead
            </Typography>
            <Button size="small" startIcon={<MdFilterList size={18} />}>
              Filtro
            </Button>
          </div>
        </div>
        <TableProvider>
          <Table
            columns={columns}
            rows={rows}
            rowHeight={40}
            checkboxSelection
          />
        </TableProvider>
      </PageContent>
    </>
  );
};
