import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const TransactionPage = ({
  match: {
    params: { transaction },
  },
}) => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Transaction: {transaction}
      </Typography>
    </Container>
  );
};

export default TransactionPage;
