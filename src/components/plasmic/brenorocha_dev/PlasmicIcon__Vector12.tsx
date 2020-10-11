/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1472 1557"}
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
          "M288 1533a8 8 0 01-8 8v16c13.255 0 24-10.75 24-24h-16zm-8 8a8 8 0 01-8-8h-16c0 13.25 10.745 24 24 24v-16zm-8-8a8 8 0 018-8v-16c-13.255 0-24 10.75-24 24h16zm8-8a8 8 0 018 8h16c0-13.25-10.745-24-24-24v16zM32 1014a8 8 0 01-8 8v16c13.255 0 24-10.75 24-24H32zm-8 8a8 8 0 01-8-8H0c0 13.25 10.745 24 24 24v-16zm-8-8a8 8 0 018-8v-16c-13.255 0-24 10.75-24 24h16zm8-8a8 8 0 018 8h16c0-13.25-10.745-24-24-24v16zm1432-187a8 8 0 01-8 8v16c13.25 0 24-10.745 24-24h-16zm-8 8a8 8 0 01-8-8h-16c0 13.255 10.75 24 24 24v-16zm-8-8a8 8 0 018-8v-16c-13.25 0-24 10.745-24 24h16zm8-8a8 8 0 018 8h16c0-13.255-10.75-24-24-24v16zM1296 24a8 8 0 01-8 8v16c13.25 0 24-10.745 24-24h-16zm-8 8a8 8 0 01-8-8h-16c0 13.255 10.75 24 24 24V32zm-8-8a8 8 0 018-8V0c-13.25 0-24 10.745-24 24h16zm8-8a8 8 0 018 8h16c0-13.255-10.75-24-24-24v16zm112 1175c0 4.42-3.58 8-8 8v16c13.25 0 24-10.75 24-24h-16zm-8 8c-4.42 0-8-3.58-8-8h-16c0 13.25 10.75 24 24 24v-16zm-8-8c0-4.42 3.58-8 8-8v-16c-13.25 0-24 10.75-24 24h16zm8-8c4.42 0 8 3.58 8 8h16c0-13.25-10.75-24-24-24v16zm-1248-57v295h16v-295h-16zm0 295c0 66.27 53.726 120 120 120v-16c-57.438 0-104-46.56-104-104h-16zM40 1022c57.438 0 104 46.56 104 104h16c0-66.27-53.726-120-120-120v16zm1392-211H833.5v16H1432v-16zm-793.5 195H40v16h598.5v-16zm89.5-89.5c0 49.429-40.071 89.5-89.5 89.5v16c58.266 0 105.5-47.234 105.5-105.5h-16zM833.5 811C775.234 811 728 858.234 728 916.5h16c0-49.429 40.071-89.5 89.5-89.5v-16zm514.5 344V60h-16v1095h16zm0-1095c0-24.3-19.7-44-44-44v16c15.46 0 28 12.536 28 28h16zm28 1123c-15.46 0-28-12.54-28-28h-16c0 24.3 19.7 44 44 44v-16zm52-4V831h-16v348h16zm0-348a4 4 0 014-4v-16c-11.05 0-20 8.954-20 20h16zm-20 368c11.05 0 20-8.95 20-20h-16c0 2.21-1.79 4-4 4v16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
