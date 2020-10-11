/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 439 1526"}
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
        opacity={".75"}
        d={
          "M143 719c0 6.075-4.925 11-11 11v10c11.598 0 21-9.402 21-21h-10zm-11 11c-6.075 0-11-4.925-11-11h-10c0 11.598 9.402 21 21 21v-10zm-11-11c0-6.075 4.925-11 11-11v-10c-11.598 0-21 9.402-21 21h10zm11-11c6.075 0 11 4.925 11 11h10c0-11.598-9.402-21-21-21v10zM32 1505c0 6.08-4.925 11-11 11v10c11.598 0 21-9.4 21-21H32zm-11 11c-6.075 0-11-4.92-11-11H0c0 11.6 9.402 21 21 21v-10zm-11-11c0-6.08 4.925-11 11-11v-10c-11.598 0-21 9.4-21 21h10zm11-11c6.075 0 11 4.92 11 11h10c0-11.6-9.402-21-21-21v10zm277.5-920.5v-423h-10v423h10zm0-423C298.5 72.904 361.404 10 439 10V0c-83.119 0-150.5 67.381-150.5 150.5h10zM148 724c83.119 0 150.5-67.381 150.5-150.5h-10c0 77.596-62.904 140.5-140.5 140.5v10zm-66.5 741.5v-707h-10v707h10zm0-707c0-19.054 15.446-34.5 34.5-34.5v-10c-24.577 0-44.5 19.923-44.5 44.5h10zM37 1510c24.577 0 44.5-19.92 44.5-44.5h-10c0 19.05-15.446 34.5-34.5 34.5v10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
