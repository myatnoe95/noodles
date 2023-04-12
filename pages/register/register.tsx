import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

//UI Components

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button, Grid } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

//Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Context
import { RegisterContext, IRegisterData } from "@/contexts/RegisterContext";

//Components
import Stepper from "../../components/Stepper/Stepper";

const Register = () => {
  const router = useRouter();

  const { setRegisterData } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>();

  const [age, setAge] = useState("");

  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = React.useState(false);

  const [otherValue, setOtherValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setOtherValue(event.target.value);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const radioVal = (event.target as HTMLInputElement).value;
    setAge((event.target as HTMLInputElement).value);
  };

  const handleChangeProvince = (event: SelectChangeEvent) => {
    setProvince(event.target.value as string);
  };

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const handleChangeZipCode = (event: SelectChangeEvent) => {
    setZipCode(event.target.value as string);
  };

  const nextStep = () => setStep(2);

  const previousStep = () => setStep(1);

  const onSubmit = (data: IRegisterData) => {
    router.push("/profile");

    const newData = {
      ...data,
      age: age == "other" ? otherValue : age,
    };

    setRegisterData(newData);
  };

  return (
    <Box>
      <Stepper step={step} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 3,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ my: 2 }}>
            REGISTER
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {step == 1 ? (
              <>
                <InputLabel id="demo-simple-select-label">YOUR NAME</InputLabel>
                <Grid container spacing={2} style={{ marginBottom: "5%" }}>
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      {...register("first_name", {
                        required: true,
                      })}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      {...register("last_name", {
                        required: true,
                      })}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>

                <InputLabel id="demo-simple-select-label">ADDRESS</InputLabel>
                <Grid item xs={12} style={{ marginBottom: "3%" }}>
                  <TextField
                    label="Address"
                    {...register("address", {
                      required: true,
                    })}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12} style={{ marginBottom: "3%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Province *
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={province}
                      {...register("province", {
                        required: true,
                      })}
                      label="Province *"
                      onChange={handleChangeProvince}
                      required
                    >
                      <MenuItem value="province_1">Province 1</MenuItem>
                      <MenuItem value="province_2">Province 2</MenuItem>
                      <MenuItem value="province_3">Province 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: "5%" }}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        City *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={city}
                        {...register("city", {
                          required: true,
                        })}
                        label="City *"
                        onChange={handleChangeCity}
                        required
                      >
                        <MenuItem value="city_1">City 1</MenuItem>
                        <MenuItem value="city_2">City 2</MenuItem>
                        <MenuItem value="city_3">City 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        ZipCode *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={zipCode}
                        {...register("zip_code", {
                          required: true,
                        })}
                        label="ZipCode *"
                        onChange={handleChangeZipCode}
                        required
                      >
                        <MenuItem value="10250">10250</MenuItem>
                        <MenuItem value="10260">10260</MenuItem>
                        <MenuItem value="10270">10270</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid>
                  <FormControl style={{ marginBottom: "5%" }}>
                    <FormLabel id="demo-radio-buttons-group-label">
                      AGE
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="18-25"
                      name="radio-buttons-group"
                      value={age}
                      onChange={handleChangeAge}
                    >
                      <FormControlLabel
                        value="18-25"
                        control={<Radio />}
                        label="18-25"
                      />
                      <FormControlLabel
                        value="26-30"
                        control={<Radio />}
                        label="26-30"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>

                    {age == "other" && (
                      <TextField
                        label="Age"
                        value={otherValue}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    )}
                  </FormControl>
                </Grid>
              </>
            ) : (
              <>
                <InputLabel id="demo-simple-select-label">
                  LOGIN DETAILS
                </InputLabel>
                <Grid container spacing={2} style={{ marginBottom: "5%" }}>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      {...register("user_name", {
                        required: true,
                      })}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      {...register("password", {
                        required: true,
                      })}
                      label="Password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </>
            )}

            <Grid container style={{ justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                style={{
                  marginRight: "1%",
                  borderColor: step == 1 ? "#A81E24" : "#313233",
                  borderRadius: "100px",
                  color: step == 1 ? "#A81E24" : "#313233",
                }}
                onClick={step == 1 ? nextStep : previousStep}
              >
                {step == 1 ? "Cancel" : "Back"}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#313233", borderRadius: "100px" }}
                onClick={nextStep}
                type="submit"
              >
                {step == 1 ? "Next" : "Register"}
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
