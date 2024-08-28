import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";

// List of problematic environment variables
const problematicEnvVars = ["CommonProgramFiles(x86)", "ProgramFiles(x86)"];

// Remove the problematic environment variables
problematicEnvVars.forEach((varName) => {
  delete process.env[varName];
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin("all")],
});
