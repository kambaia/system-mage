import cn from "classnames";
type Props = {
  className?: string;
  [key: string]: unknown;
};
export  const Card: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn("p-5 md:p-8 bg-white shadow rounded", className)}
      {...props}
    />
  );
};


export const CardBody: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn("p-5 md:p-0 bg-white shadow rounded", className)}
      {...props}
    />
  );
};
