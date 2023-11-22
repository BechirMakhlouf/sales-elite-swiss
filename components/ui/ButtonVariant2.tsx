import { PropsWithChildren } from "react";

// <div className="absolute inline-block text-transparent py-2 px-4 border bg-accent h-[140%] top-[-20%] right-[10%] w-[80%] rounded-md ">
//   {props.children}
// </div>
const ButtonVariant2 = (props: PropsWithChildren) => {
  return (
    <div className="select-none inline-block relative w-fit left-18">
      <div className="absolute inline-block text-transparent py-2 px-4 border bg-accent h-[140%] top-[-20%] right-[10%] w-[80%] rounded-md ">
        {props.children}
      </div>
      <button className="inline-block relative z-10 bg-transparent button-variant-2 w-fit py-2 px-4 text-primary rounded-md 
      border-secondary border-dashed border-2">
        {props.children}
      </button>
    </div>
  );
};

export default ButtonVariant2;
