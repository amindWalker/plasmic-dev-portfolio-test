/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Capa 1"}
      viewBox={"0 0 184.72 139.32"}
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
          "M159.89 6.6H24.83a15.59 15.59 0 00-15.6 15.59h166.26a15.6 15.6 0 00-15.6-15.59zM92.36 88.94L9.23 35.07v82.06a15.59 15.59 0 0015.6 15.59h135.06a15.6 15.6 0 0015.6-15.59V35.07z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M175.49 22.19H9.23l83.13 53.88 83.13-53.88z"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
