import { Box } from "@mui/material";

interface PageHeaderTitleProps {
  title: string
}

export const PageHeaderTitle = (props: PageHeaderTitleProps) => {
  const { title } = props;

  return (
    <Box
      sx={{
        fontSize: 22,
        fontWeight: 800,
        marginBottom: { xs: 0, md: ".5rem" },
        height: 40,
        display: "flex",
        alignItems: "center",
      }}
    >
      {title}
    </Box>
  );
};
