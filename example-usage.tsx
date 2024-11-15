import React from "react";
import { initializeIValt } from "ivalt-react";
import { BiometricAuthForm } from "./dist/components/BiometricAuthForm";

// Initialize the package with your configuration
initializeIValt({
  baseURL: "https://your-ivalt-api-url",
  apiKey: "your-api-key",
});

function App() {
  const handleAuthSuccess = (userData: any) => {
    console.log("Authentication successful:", userData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <BiometricAuthForm onSuccess={handleAuthSuccess} />
    </div>
  );
}

export default App;
