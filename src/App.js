import { LoginScreen } from "./Screen/Login";
import { Mapa } from "./Screen/Mapa";
import { MenuScreen } from "./Screen/Menu";
import { AuthProvider } from "./Handler/Auth/authProvider";
import { useAuth } from "./Hooks/useAuth";
import { useState } from "react";

function AppNavigator(){
  const { user, signOut } = useAuth();
  const [route, setRoute] = useState("menu")

  if (!user){
    return <LoginScreen/>
  }
  console.log("✅ Usuario autenticado:", user);
  switch (route){
    case "menu":
      return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
    case "mapa":
      return <Mapa onBack={() => setRoute("menu")} />
    default:
      return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
  }
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}