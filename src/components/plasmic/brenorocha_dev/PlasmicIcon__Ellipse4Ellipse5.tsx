/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse4Ellipse5Icon(props: Ellipse4Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 118 1296"}
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
          "M55 63v1170h8V63h-8zm0 1170c0 30.38-24.624 55-55 55v8c34.794 0 63-28.21 63-63h-8zM118 0C83.206 0 55 28.206 55 63h8c0-30.376 24.624-55 55-55V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse4Ellipse5Icon;
/* prettier-ignore-end */
