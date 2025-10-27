import { AuthProvider } from "./Handler/Auth/authProvider";
import { Navigation } from "./Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}