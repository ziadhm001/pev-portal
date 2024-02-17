import {
  Flex,
  Input,
  Text,
  chakra,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

const FileComponent = ({ file }) => {
  return (
    <>
      <Flex
        as={"li"}
        key={file.path}
        listStyleType={"none"}
        mt={2}
        border={"1px solid"}
        p={2}
        w={"100%"}
      >
        <Text>{file.name}</Text>
      </Flex>
    </>
  );
};

function FileUploadField({
  value,
  onChange,
  error,
  touched,
  helperText,
  label,
  name,
}) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
  });
  const files = acceptedFiles.map((file) => (
    <FileComponent key={file.path} file={file} />
  ));
  const isError = error !== undefined;
  const isTouched = touched !== undefined;
  const isInvalid = isError && isTouched;

  return (
    <FormControl id={name} isRequired isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Flex
        {...getRootProps()}
        border={"1px dashed"}
        p={4}
        mt={4}
        mb={4}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        bg={"white"}
      >
        <Input {...getInputProps()} />
        <FiUploadCloud size={50} color={"green"} />
        <Text
          textAlign={"center"}
          fontSize={"lg"}
          fontWeight={"bold"}
          color={"black"}
        >
          {"Drag 'n' drop some files here,"}
        </Text>
        <Text color={"brand.500"}>or click to select files</Text>

        <chakra.ul w={"100%"} color={"black"}>
          {" "}
          {files}
        </chakra.ul>
      </Flex>
      <FormHelperText>{!error && helperText}</FormHelperText>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default FileUploadField;
