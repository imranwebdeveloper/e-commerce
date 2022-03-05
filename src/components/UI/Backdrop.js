import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ on }) => {
  return (
    <div
      onClick={() => on(false)}
      className="fixed h-screen z-50 top-0 left-0 w-80 bg-white/30 overflow-y-auto  backdrop-brightness-50 "
    />
  );
};

const BackdropLayout = ({ on }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop on={on} />,
        document.getElementById("portal-root")
      )}
    </>
  );
};

export default BackdropLayout;
