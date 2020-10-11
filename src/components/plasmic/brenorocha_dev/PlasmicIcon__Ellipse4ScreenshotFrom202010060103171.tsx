/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4ScreenshotFrom202010060103171IconProps = React.ComponentProps<
  "svg"
> & {
  title?: string;
};

export function Ellipse4ScreenshotFrom202010060103171Icon(
  props: Ellipse4ScreenshotFrom202010060103171IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 394 678"}
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
          "M393.997 0h-16.999v8h16.999V0zM192.998 184v309.71h8V184h-8zm-176 485.71H0v8h16.998v-8zm176-176c0 97.202-78.797 176-176 176v8c101.621 0 184-82.38 184-184h-8zM376.998 0c-101.62 0-184 82.38-184 184h8c0-97.202 78.798-176 176-176V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse4ScreenshotFrom202010060103171Icon;
/* prettier-ignore-end */
