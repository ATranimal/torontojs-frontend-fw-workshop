import { init } from "./framework/index";
import { Welcome } from "./components/Welcome";

const initComponent = Welcome("Simon");

init("#app", initComponent);
