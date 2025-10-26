import { LoginScreen } from "./Screen/Login";
import { Mapa } from "./Screen/Mapa";
import { MenuScreen } from "./Screen/Menu";
import { AuthProvider } from "./Handler/Auth/authProvider";
import { useAuth } from "./Hooks/useAuth";

function AppNavigator(){
  const { user } = useAuth();
  if (user) console.log("✅ Usuario autenticado:", user);
  console.log({ LoginScreen, Mapa, MenuScreen });
  return user ? <MenuScreen/> : <LoginScreen />
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}