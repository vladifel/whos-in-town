import { FC } from "react";
import { IconButton, Tooltip, TooltipProps } from "@material-ui/core";

interface ITooltipButtonProps {
  tooltipTitle: string;
  children: JSX.Element;
  placement?: TooltipProps["placement"];

  onClick: () => void;
}
const TooltipButton: FC<ITooltipButtonProps> = ({
  tooltipTitle,
  children,
  placement,
  onClick,
}: ITooltipButtonProps) => {
  return (
    <Tooltip
      title={tooltipTitle}
      placement={placement ?? undefined}
      enterDelay={500}
      enterNextDelay={500}
    >
      <IconButton style={{ marginRight: "0.2rem" }} edge="end" onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
