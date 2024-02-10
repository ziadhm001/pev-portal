import { Box } from "@chakra-ui/react";

function GradientLine({ ...rest }) {
  return (
    <Box
      w={"100%"}
      height={"20px"}
      bg={
        "linear-gradient(90deg, #FAF0E7 -0.55%, #5A7729 14.44%, #39807F 31.42%, #5A7729 48.4%, #4BB543 64.38%, #A8BE38 81.86%, #4BB543 99.34%)"
      }
      position={"relative"}
      filter={"blur(10px)"}
      transform={"translateY(-3px)"}
      zIndex={-1}
      {...rest}
    />
  );
}

export default GradientLine;
