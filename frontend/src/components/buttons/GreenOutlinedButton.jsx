import { Button } from "@chakra-ui/react";

function GreenOutlinedButton({ label, ...rest }) {
  return (
    <Button
      variant={"outline"}
      borderColor={"#4BB543"}
      color={"#4BB543"}
      bg={"white"}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default GreenOutlinedButton;
