/* ==========================================================================
src/main.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import { mount } from "svelte";
import App from "./App.svelte";
import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/default.css";

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
