import SideBar from "../../components/sidebar/SideBar";
import { Button, Stack } from "@chakra-ui/react";
import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import FormPasswordField from "../../components/fields/FormPasswordField";
import React from "react";
import ProfilePictureField from "../../components/fields/ProfilePictureField";
function AddEditProfile() {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [showPassword3, setShowPassword3] = React.useState(false);
  const isEditing = false;
  const completeProfileInformationForm = useFormik({
    initialValues: {
      profilePicture: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <SideBar>
      <Stack spacing={4} p={8} w={"100%"}>
        <Stack spacing={4} color={"brand.500"}>
          <ProfilePictureField
            label={"Profile Picture"}
            name={"profilePicture"}
            isEditing={isEditing}
            profilePictureUrl={
              completeProfileInformationForm.values.profilePicture
            }
            onChangeProfilePictureUrl={
              completeProfileInformationForm.handleChange
            }
            error={completeProfileInformationForm.errors.profilePicture}
            touched={completeProfileInformationForm.touched.profilePicture}
            helperText={"Upload a photo of yourself"}
          />
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"100%"}
          >
            <FormTextField
              label={"First Name"}
              name={"firstName"}
              type={"text"}
              placeholder={"Enter your first name"}
              value={completeProfileInformationForm.values.firstName}
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.firstName}
              touched={completeProfileInformationForm.touched.firstName}
              helperText={"Enter your first name"}
              bg={"white"}
            />
            <FormTextField
              label={"Last Name"}
              name={"lastName"}
              type={"text"}
              placeholder={"Enter your last name"}
              value={completeProfileInformationForm.values.lastName}
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.lastName}
              touched={completeProfileInformationForm.touched.lastName}
              helperText={"Enter your last name"}
              bg={"white"}
            />
          </Stack>
          <FormTextField
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={completeProfileInformationForm.values.email}
            onChange={completeProfileInformationForm.handleChange}
            error={completeProfileInformationForm.errors.email}
            touched={completeProfileInformationForm.touched.email}
            helperText={"Enter your email"}
            bg={"white"}
          />
          <FormPasswordField
            showPassword={showPassword1}
            setShowPassword={setShowPassword1}
            label={"Old Password"}
            name={"oldPassword"}
            placeholder={"Enter your password"}
            value={completeProfileInformationForm.values.oldPassword}
            onChange={completeProfileInformationForm.handleChange}
            error={completeProfileInformationForm.errors.password}
            touched={completeProfileInformationForm.touched.password}
            helperText={"Password must be at least 8 characters"}
            bg={"white"}
          />
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"100%"}
          >
            <FormPasswordField
              showPassword={showPassword2}
              setShowPassword={setShowPassword2}
              label={"New Password"}
              name={"newPassword"}
              placeholder={"Enter your password"}
              value={completeProfileInformationForm.values.newPassword}
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.password}
              touched={completeProfileInformationForm.touched.password}
              helperText={"Password must be at least 8 characters"}
              bg={"white"}
            />
            <FormPasswordField
              showPassword={showPassword3}
              setShowPassword={setShowPassword3}
              label={"Confirm Password"}
              name={"confirmPassword"}
              placeholder={"Enter your password"}
              value={completeProfileInformationForm.values.confirmPassword}
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.password}
              touched={completeProfileInformationForm.touched.password}
              helperText={"Password must be at least 8 characters"}
              bg={"white"}
            />
          </Stack>
        </Stack>
        {isEditing && (
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"100%"}
            justifyContent={"flex-end"}
          >
            <Button bg={"white"} variant={"outline"} color={"#4BB543"}>
              Cancel
            </Button>
            <Button bg="#4BB543" color={"white"}>
              Save
            </Button>
          </Stack>
        )}
      </Stack>
    </SideBar>
  );
}

export default AddEditProfile;
