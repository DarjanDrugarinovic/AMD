import { Button } from "@mui/material";
import { useTypedNavigate } from "routes/useTypedNavigate";
import { useAuthStore } from "store/useAuthStore";

export const SignInOut = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const token = useAuthStore((state) => state.token);
  const { navigate } = useTypedNavigate();

  const handleSignIn = () => {
    setToken("12345");
    navigate("product");
  };

  const handleSignOut = () => {
    setToken("");
    navigate("login");
  };

  if (!token)
    return (
      <Button variant="contained" onClick={handleSignIn}>
        Sign In
      </Button>
    );

  return (
    <Button variant="contained" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};
