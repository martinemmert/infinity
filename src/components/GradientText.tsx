import React from "react";

export const Heading: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  const cn = React.useMemo(
    () =>
      `font-display text-transparent bg-clip-text bg-gradient-to-tr from-dark-grey to-vivid-blue ${className}`,
    [className]
  );
  return (
    <h1 className={cn} {...props}>
      {children}
    </h1>
  );
};

type GradientTextProps<T> = {
  children: React.ReactElement<React.HTMLProps<T>>;
};

export function GradientText<T>({ children }: GradientTextProps<T>) {
  const child = React.Children.only(children);
  const { className: cn, ...props } = child.props;
  const className = `text-transparent bg-clip-text bg-gradient-to-tr from-dark-grey to-vivid-blue ${cn}`;
  return React.cloneElement(child, { className, ...props });
}
