import { Button } from "@chakra-ui/react";

function GreenButton({ label, ...rest }) {
  return (
    <Button bg={"#4BB543"} color={"white"} {...rest}>
      {label}
    </Button>
  );
}

export default GreenButton;
