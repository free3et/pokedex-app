import React from "react";
import { Box, Pagination, useMediaQuery } from "@mui/material";

interface PaginationComponentProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  selectedTypes: string[];
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  selectedTypes,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault()
    onPageChange(value);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={pageCount}
        page={currentPage}
        color="primary"
        onChange={handlePageChange}
        disabled={selectedTypes.length > 0}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: isMobile ? 2 : 0,
          "& .MuiPagination-ul": {
            alignItems: "center",
          },
          "& .MuiPaginationItem-root": {
            height: isMobile ? "23px" : "35px",
            minWidth: isMobile ? "23px" : "35px",
          },
        }}
      />
    </Box>
  );
};
