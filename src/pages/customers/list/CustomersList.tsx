import { AccountCircle, Search } from "@mui/icons-material";
import { Box, InputAdornment } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Button,
  Table,
  TableProvider,
  TextField,
} from "../../../components";
import {
  PageContent,
  PageHeader,
  PageHeaderTitle,
} from "../../../layout/components";
import { CustomerListProvider } from "./context/customerList.context";

const columns: GridColDef[] = [
  {
    field: "companyId",
    headerName: "CÓDIGO",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "NOME",
    flex: 1,
    minWidth: 300,
  },
  {
    field: "seller",
    headerName: "VENDEDOR",
    minWidth: 300,
  },
  {
    field: "phone",
    headerName: "TELEFONE",
    width: 160,
  },
  {
    field: "address",
    headerName: "CIDADE / UF",
    width: 200,
  },
];

const rows = [
  {
    id: "1",
    companyId: "000001",
    fullName: "João Vitor Fogaça",
    seller: "Jonathan da Silva Nascimento",
    phone: "(55) 99109-5535",
    address: "Cruz Alta / RS",
  },
];

export const CustomersTable = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle title="Clientes" />
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/home" color="#262626" style={{ color: "#595959" }}>
            Início
          </Link>
          <span style={{ color: "#595959" }}>Clientes</span>
        </Breadcrumbs>
      </PageHeader>
      <PageContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Pesquisar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }}
            variant="standard"
            style={{ width: "100%", maxWidth: 400 }}
          />
          <Button
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
            }}
            size="small"
            startIcon={<HiPlus size={17} />}
          >
            Cliente
          </Button>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <Table columns={columns} rows={rows} />
        </div>
      </PageContent>
    </>
  );
};

export const CustomersListPage = () => (
  <CustomerListProvider>
    <TableProvider>
      <CustomersTable />
    </TableProvider>
  </CustomerListProvider>
);
