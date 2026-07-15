import React, { useState } from "react";

const SocmedCardButton = ({ href = "#", Icon, label = "", color = "#7c3aed" }) => {
  const [hover, setHover] = useState(false);

  const containerStyle = {
    backgroundColor: hover ? color : "transparent",
    borderColor: hover ? color : "rgba(255,255,255,0.08)",
    transition: "background-color 160ms ease, border-color 160ms ease",
  };

  const iconStyle = {
    color: hover ? "#ffffff" : color,
    transition: "color 160ms ease",
  };

  const labelStyle = {
    color: hover ? "#ffffff" : "rgba(255,255,255,0.9)",
    transition: "color 160ms ease",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={containerStyle}
        className="flex items-center gap-3 px-4 py-2 rounded-lg border"
      >
        {Icon ? <Icon className="text-2xl" style={iconStyle} /> : null}
        <span style={labelStyle} className="font-medium">
          {label}
        </span>
      </div>
    </a>
  );
};

export default SocmedCardButton;
