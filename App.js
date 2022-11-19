import { InfoProvider } from "./src/context/InfoContext";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {

  return (
    <InfoProvider>
      <Navigation />
    </InfoProvider>
  );
}