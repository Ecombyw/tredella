"use client";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";
import { signUpFormValidation } from "@/configs/validation/yup-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SignUpFormFields from "./sign-up-form-fields";
import { loginRequest, SignUpRequest } from "@/lib/redux/actions/auth";
import { STATUSES } from "@/configs/constants/default-values";
import { generateUsername } from "@/configs/utils/helpers";

const SignUpFormControl = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "",
      password: "",
      confirm_password: "",
      country: "",
      username:""
    },
    mode: "onChange",
    resolver: yupResolver(signUpFormValidation),
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { status } = useSelector((state) => state.auth);

  // Form submission handler
  const submitForm = async (values) => {
    values["mail_verify_url"] = `http://localhost:3000/verify-email`
    values["username"] = generateUsername(
      values["first_name"],
      values["last_name"]
    );
    dispatch(SignUpRequest({ values, router }));
    reset();
  };
  console.log("getValues", getValues());
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <SignUpFormFields
        control={control}
        setValue={setValue}
        errors={errors}
        loading={status === STATUSES.LOADING}
      />
      <SimpleButton
        text={"Register"}
        fullWidth
        disabled={!(isDirty && isValid)}
        sxProps={{
          width: "100%",
          mt: "14px",
          height: "38px",
          borderRadius: "4px",
          fontSize: "18px",
          textTransform: "uppercase",
          display: "flex",
          gap: "8px",
          backgroundColor: theme.palette.backgroundColor.primary,
          color: theme.palette.textColor.white,
        }}
        loading={status === STATUSES.LOADING}
      />
      <Box my={1} textAlign={"center"} gap={2}>
        Already have an Account?
        <Link
          href="/login"
          style={{
            paddingLeft: "2px",
            color: theme.palette.textColor.primary,
            textDecoration: "underline",
          }}
        >
          Login
        </Link>
      </Box>
    </form>
  );
};

export default SignUpFormControl;
