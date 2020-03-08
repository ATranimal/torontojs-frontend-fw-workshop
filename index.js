import { init } from "./framework/index";
import { Welcome } from "./components/Welcome";

const student = "Simon";

init("#app", Welcome(student));
