/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10Ellipse5Icon(props: Ellipse10Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 262"}
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
          "M117 145v-28h-8v28h8zm0-28C117 52.383 64.617 0 0 0v8c60.199 0 109 48.801 109 109h8zm109 137c-60.199 0-109-48.801-109-109h-8c0 64.617 52.383 117 117 117v-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse10Ellipse5Icon;
/* prettier-ignore-end */
