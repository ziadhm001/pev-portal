import SideBar from "../../components/sidebar/SideBar";
import { Button, Stack } from "@chakra-ui/react";
import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import FormPasswordField from "../../components/fields/FormPasswordField";
import React from "react";
import ProfilePictureField from "../../components/fields/ProfilePictureField";
function AddEditProfile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [showPassword3, setShowPassword3] = React.useState(false);
  const isEditing = true;
  const completeProfileInformationForm = useFormik({
    initialValues: {
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      email: user.user.email,
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
              value={user.user.firstName}
              disabled
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.firstName}
              touched={completeProfileInformationForm.touched.firstName}
              bg={"white"}
            />
            <FormTextField
              label={"Last Name"}
              name={"lastName"}
              type={"text"}
              placeholder={"Enter your last name"}
              value={user.user.lastName}
              disabled
              onChange={completeProfileInformationForm.handleChange}
              error={completeProfileInformationForm.errors.lastName}
              touched={completeProfileInformationForm.touched.lastName}
              bg={"white"}
            />
          </Stack>
          <FormTextField
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={user.user.email}
            disabled
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
            <Button bg="#4BB543" color={"white"} onClick={completeProfileInformationForm.handleSubmit}>
              Save
            </Button>
          </Stack>
        )}
      </Stack>
    </SideBar>
  );
}

export default AddEditProfile;
