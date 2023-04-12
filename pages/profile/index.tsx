import React, { useContext } from "react";
import { useRouter } from "next/router";

//UI Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

//Context
import { RegisterContext } from "@/contexts/RegisterContext";

const Profile = () => {
  const router = useRouter();
  const { registerData } = useContext(RegisterContext);

  const redirectToHome = () => router.push("/");

  const stringToColor = (string: string) => {
    if (!string) {
      return "#000000";
    }

    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name: string) => {
    if (!name || name.trim() === "") {
      name = "Anonymous";
    }
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: name
        ? `${name.trim().split(" ")[0][0]}${
            name.trim().split(" ").length > 1
              ? name.trim().split(" ")[1][0]
              : ""
          }`
        : "",
    };
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        paddingTop: 5,
        marginBottom: 5,
      }}
    >
      <Card
        sx={{
          minWidth: "250px",
          maxWidth: "600px",
          width: "90%",
          padding: "2% 5%",
          margin: "auto",
          display: "block",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
          >
            <Avatar
              {...stringAvatar(
                registerData ? registerData.first_name : "Anonymous"
              )}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: 32,
              fontWeight: "600",
              color: "#111213",
              textAlign: "center",
            }}
            color="text.secondary"
            gutterBottom
          >
            {registerData?.first_name && registerData?.last_name
              ? `${registerData.first_name} ${registerData.last_name}`
              : "-"}
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              color: "#AAABAC ",
              textAlign: "center",
            }}
          >
            {registerData?.age ? `${registerData.age} years` : "No Data Here!"}
          </Typography>

          <Divider sx={{ color: "#E1E2E3", marginBottom: 4 }} />

          <Box
            sx={{
              marginBottom: 5,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: 18, fontWeight: "600", paddingBottom: 1 }}
            >
              ADDRESS
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {registerData?.address ?? "No Data Here!"}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 10 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "600", fontSize: 18, paddingBottom: 1 }}
            >
              LOGIN DETAILS
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#AAABAC",
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Username
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "400", fontSize: 16, color: "#111213" }}
                >
                  {registerData?.user_name ?? "No Data Here!"}
                </Typography>
              </Box>

              <Box sx={{ flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#AAABAC",
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Password
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "400", fontSize: 16, color: "#111213" }}
                >
                  {registerData?.password?.replace(/./g, "*") ??
                    "No Data Here!"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            style={{
              marginRight: "1%",
              borderColor: "#313233",
              borderRadius: "100px",
              color: "#313233",
              width: 150,
            }}
            onClick={redirectToHome}
          >
            Log out
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#313233",
              borderRadius: "100px",
              width: 150,
            }}
            onClick={redirectToHome}
            type="submit"
          >
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Profile;
