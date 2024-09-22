import { ReactNode } from "react";

interface Props {
  children: ReactNode; // ReactNode allows us to use any JSX element in the children property
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
