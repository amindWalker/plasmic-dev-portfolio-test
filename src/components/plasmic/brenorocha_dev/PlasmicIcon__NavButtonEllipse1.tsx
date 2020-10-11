/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavButtonEllipse1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavButtonEllipse1Icon(props: NavButtonEllipse1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 1107"}
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
          "M0 0v5.009h8V0H0zm0 15.027v10.018h8V15.027H0zm0 20.036v10.018h8V35.063H0zM0 55.1v10.018h8V55.1H0zm0 20.036v10.018h8V75.135H0zm0 20.036v10.018h8V95.171H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V155.28H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.037v10.018h8V255.46H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V355.64H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V455.82H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zM0 556v10.018h8V556H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V656.18H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V756.36H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V856.54H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8V956.72H0zm0 20.036v10.018h8v-10.018H0zm0 20.036v10.018h8v-10.018H0zm0 20.038v10.02h8v-10.02H0zm0 20.03v10.02h8v-10.02H0zm0 20.04v10.02h8v-10.02H0zm0 20.04v10.01h8v-10.01H0zm0 20.03v10.02h8v-10.02H0z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default NavButtonEllipse1Icon;
/* prettier-ignore-end */
