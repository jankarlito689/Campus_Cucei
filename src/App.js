import { LoginScreen } from "./Screen/Login";
import MAPA from "./Screen/Mapa";
import { AuthProvider } from "./Handler/Auth/authProvider";
import { useAuth } from "./Hooks/useAuth";

function Main(){
  const { user } = useAuth();
  if (user) console.log("✅ Usuario autenticado:", user);

  return user ? <MAPA /> : <LoginScreen />
}

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}


