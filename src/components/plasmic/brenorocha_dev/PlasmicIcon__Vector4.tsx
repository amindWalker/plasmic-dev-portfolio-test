/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 45"}
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
          "M29 43.054v-7.74a6.74 6.74 0 00-1.88-5.22c6.28-.7 12.88-3.08 12.88-14a10.88 10.88 0 00-3-7.5 10.14 10.14 0 00-.18-7.54s-2.36-.7-7.82 2.96a26.76 26.76 0 00-14 0c-5.46-3.66-7.82-2.96-7.82-2.96A10.14 10.14 0 007 8.594a10.88 10.88 0 00-3 7.56c0 10.84 6.6 13.22 12.88 14a6.74 6.74 0 00-1.88 5.16v7.74m0-6c-10 3-10-5-14-6l14 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
