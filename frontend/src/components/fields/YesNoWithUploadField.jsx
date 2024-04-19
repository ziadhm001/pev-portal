import { Flex, Input, Text, chakra } from "@chakra-ui/react";
import FormSelectField from "./FormSelectField";
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

function YesNoWithUploadField({
  value,
  onChange,
  error,
  touched,
  helperText,
  label,
  name,
  placeholder,
  uploadUrlName,
  fileUploadURL,
  onFileUploadURLChange,
  ...rest
}) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
  });
  const files = acceptedFiles.map((file) => (
    <FileComponent key={file.path} file={file} />
  ));

  return (
    <>
      <FormSelectField
        label={label}
        name={name}
        allOptions={[
          { code: "yes", name: "Yes" },
          { code: "no", name: "No" },
        ]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        touched={touched}
        helperText={helperText}
        bg={"white"}
        {...rest}
      />
      {value === "yes" && (
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
      )}
    </>
  );
}

export default YesNoWithUploadField;
