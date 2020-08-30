import { useEffect } from "react";

const useInstagramFeed = () => {
  useEffect(() => {
    // @ts-ignore
    window.PixleeAsyncInit = function () {
      // @ts-ignore
      Pixlee.init({ apiKey: "EIudz2zNGMV7tC2V-Azp" });

      // @ts-ignore
      Pixlee.addSimpleWidget({ widgetId: "29373" });
    };
    const script = document.createElement("script");

    script.src = "//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export { useInstagramFeed };
