"use client";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";
import { loginFormValidation } from "@/configs/validation/yup-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoginFormFields from "./login-form-fields";
import { loginRequest } from "@/lib/redux/actions/auth";
import { STATUSES } from "@/configs/constants/default-values";

const LoginFormControl = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    setError,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginFormValidation),
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { status } = useSelector((state) => state.auth);

  // Form submission handler
  const submitForm = async (values) => {
    dispatch(loginRequest({ values, router }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <LoginFormFields
        control={control}
        setValue={setValue}
        errors={errors}
        loading={status === STATUSES.LOADING}
      />
      <SimpleButton
        text={"Login"}
        fullWidth
        disabled={!(isDirty && isValid)}
        sxProps={{
          width: "100%",
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
      Don&apos;t have an Account?
      <Link
          href="/register"
          style={{
            paddingLeft: "2px",
            color: theme.palette.textColor.primary,
            textDecoration: "underline",
          }}
        >
          Sign up
        </Link>
      </Box>
    </form>
  );
};

export default LoginFormControl;
