import { useDropzone } from "react-dropzone";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
  FormLabel,
  Input,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { useCallback } from "react";

function ProfilePictureField({
  label,
  name,
  isEditing,
  profilePictureUrl,
  onChangeProfilePictureUrl,
  error,
  touched,
  helperText,
  ...rest
}) {
  const isError = error !== undefined;
  const isTouched = touched !== undefined;
  const isInvalid = isError && isTouched;

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    //upload the file
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <FormControl id={name} isRequired isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justifyContent={"space-between"}
      >
        <Avatar size="2xl" src={profilePictureUrl} />
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          {isEditing && (
            <>
              <Button
                {...getRootProps()}
                bg={"#4BB543"}
                color={"white"}
                width={"100%"}
              >
                <Input
                  {...getInputProps()}
                  type="file"
                  height="100%"
                  width="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  opacity="0"
                  aria-hidden="true"
                />
                Upload photo
              </Button>
              <Button
                variant={"outline"}
                color={"#4BB543"}
                bg={"white"}
                w={"100%"}
              >
                Delete
              </Button>
            </>
          )}
        </Stack>
      </Stack>
      <FormHelperText>{!error && helperText}</FormHelperText>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default ProfilePictureField;
