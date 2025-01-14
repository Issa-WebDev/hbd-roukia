import React, { useEffect } from "react";
import { Fireworks } from "fireworks-js";

const FireworksComponent = () => {
  useEffect(() => {
    const container = document.getElementById("fireworks-container");
    const fireworks = new Fireworks(container, { autoresize: true });
    fireworks.start();

    return () => fireworks.stop();
  }, []);

  return <div id="fireworks-container" className="absolute inset-0"></div>;
};

export default FireworksComponent;
