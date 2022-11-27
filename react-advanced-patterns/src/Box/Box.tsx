import React from "react";

// C represents the element type (html tag) passed in
// Props represent the actual component props
type ComponentProp<C extends React.ElementType> = { component?: C };

type PropsToOmit<C extends React.ElementType, P> = keyof (ComponentProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & ComponentProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// type BoxProps = { color?: "blue" | "green" };

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { color?: "blue" | "green" }
>;

type BoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>,
) => React.ReactElement | null;

export const Box: BoxComponent = React.forwardRef(
  <C extends React.ElementType = "div">(
    { component, color, children, ...others }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Element = component || "div";

    const style = color ? { style: { color } } : {};

    return (
      <Element {...others} {...style} ref={ref}>
        {children}
      </Element>
    );
  },
);
