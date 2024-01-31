import { ReactNode } from "react";

interface Props {
  mobile: {
    render: ReactNode;
    className?: string;
  };
  desktop: {
    render: ReactNode;
    className?: string;
  };
}

export const Responsive = ({ mobile, desktop }: Props) => {
  const Mobile = () => (
    <div className={`lg:hidden ${mobile.className}`}>{mobile.render}</div>
  );
  const Desktop = () => (
    <div className={`hidden lg:block ${desktop.className}`}>
      {desktop.render}
    </div>
  );

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
};
