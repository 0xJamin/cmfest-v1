import React from "react";
type ClickType = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export type ButtonType = ClickType & ElementLinkType;
