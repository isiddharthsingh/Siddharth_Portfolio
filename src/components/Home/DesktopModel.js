import React from "react";

function DesktopModel() {
  return (
    <model-viewer
      className="home-model"
      src="/desktop/gaming_desktop_pc_blend_file.glb"
      ar="true"
      ar-modes="webxr scene-viewer quick-look"
      camera-controls="true"
      tone-mapping="neutral"
      shadow-intensity="1"
      exposure="1"
      camera-orbit="90deg 80deg 50m"
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '500px',
        backgroundColor: 'transparent',
        pointerEvents: 'auto',
        touchAction: 'auto'
      }}
    ></model-viewer>
  );
}

export default DesktopModel; 