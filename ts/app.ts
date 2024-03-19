import { SafeMode } from "$state/Desktop/ts/store";
import { QlorbIcon } from "$ts/images/apps";
import { HelpArticles } from "$ts/stores/articles";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { QlorbRuntime } from "./runtime";

export const QlorbApp: App = {
  metadata: {
    name: "Qlorb",
    description: "Click on flying orbs",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: QlorbIcon,
    appGroup: "entertainment",
  },
  runtime: QlorbRuntime,
  content: AppSvelte,
  id: "QlorbApp",
  size: { w: 890, h: NaN },
  minSize: { w: 890, h: 600 },
  maxSize: { w: 1200, h: NaN },
  pos: { x: 100, y: 100 },
  state: {
    minimized: false,
    maximized: true,
    headless: false,
    fullscreen: false,
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  singleInstance: true,
  loadCondition: () => !SafeMode.get(),
  helpArticle: HelpArticles.qlorb,
};
