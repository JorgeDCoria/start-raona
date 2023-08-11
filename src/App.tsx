import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import { initializeIcons, createTheme } from "@fluentui/react";
import { loadTheme } from "@fluentui/react";
import LayoutHome from "./components/layout-home/LayoutHome";
import MovieDetail from "./pages/movie-detail/MovieDetail";

initializeIcons();
const myTheme = createTheme({
  palette: {
    themePrimary: "#dd6609",
    themeLighterAlt: "#fef8f4",
    themeLighter: "#fae4d3",
    themeLight: "#f5cdae",
    themeTertiary: "#eb9e64",
    themeSecondary: "#e27623",
    themeDarkAlt: "#c85b08",
    themeDark: "#a94d07",
    themeDarker: "#7c3905",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#9ea1b4",
    neutralSecondary: "#82869c",
    neutralSecondaryAlt: "#82869c",
    neutralPrimaryAlt: "#696d84",
    neutralPrimary: "#161823",
    neutralDark: "#3c3f54",
    black: "#282b3c",
    white: "#ffffff",
  },
});
loadTheme(myTheme);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
