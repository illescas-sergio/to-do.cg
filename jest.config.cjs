module.exports = {
    testEnvironment: "jsdom", // Configura el entorno de prueba para React
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Archivo para configurar Testing Library
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mapea estilos para evitar errores
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mapea archivos estáticos
    }
  };
  