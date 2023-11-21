import { PropsWithChildren } from "react";

const ButtonVariant1 = (props: PropsWithChildren) => {
  return (
    <button className="py-2 px-4 bg-primary text-background rounded-md">
      {props.children}
    </button>
  );
};

export default ButtonVariant1;
