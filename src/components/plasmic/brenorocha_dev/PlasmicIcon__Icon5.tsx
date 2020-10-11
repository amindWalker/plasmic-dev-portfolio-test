/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.9 12.7H5.1c-1 0-2.7.3-3.2-.8-.2-.4-.1-1-.1-1.5V5.8c0-.6-.1-1.2.4-1.6.7-.7 2.3-.4 3.2-.4h6.9c.4 0 .8 0 1.1.1.9.3.9 1.2.9 2v5c-.1.9-.3 1.8-1.4 1.8-.5 0-.5.8 0 .7 1.1-.1 2-.8 2.1-1.9.1-.5 0-1 0-1.6V5.2c0-.9-.5-1.7-1.3-2-.5-.2-.9-.2-1.4-.2H3.2c-.8 0-1.6.4-2 1.2C1 4.8 1 5.4 1 6v5c0 1.5.8 2.5 2.4 2.5h9.5c.4 0 .4-.8 0-.8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.2 5.5l6.6 4.8c.1.1.3.1.4 0l6.6-4.8c.4-.3 0-.9-.4-.6-2.2 1.6-4.4 3.2-6.6 4.7h.4C6 8.1 3.8 6.5 1.6 4.9c-.4-.3-.8.3-.4.6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.6 11.8c1.4-1 2.9-2.1 4.3-3.1.4-.3 0-.9-.4-.6-1.4 1-2.9 2.1-4.3 3.1-.4.3 0 .9.4.6zm13-.6c-1.4-1-2.9-2.1-4.3-3.1-.4-.3-.8.4-.4.6 1.4 1 2.9 2.1 4.3 3.1.4.3.8-.3.4-.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
