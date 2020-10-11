/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1Screenshot202010060125451IconProps = React.ComponentProps<
  "svg"
> & {
  title?: string;
};

export function Ellipse1Screenshot202010060125451Icon(
  props: Ellipse1Screenshot202010060125451IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 668 926"}
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
          "M667.05 0H513.525v8H667.05V0zM329.525 184v557.072h8V184h-8zm-176 733.072H0v8h153.525v-8zm176-176c0 97.202-78.798 176-176 176v8c101.62 0 184-82.38 184-184h-8zM513.525 0c-101.62 0-184 82.38-184 184h8c0-97.202 78.798-176 176-176V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse1Screenshot202010060125451Icon;
/* prettier-ignore-end */
