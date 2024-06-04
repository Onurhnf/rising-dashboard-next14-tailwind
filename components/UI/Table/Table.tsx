import React, { ReactNode } from "react";
import { TableProvider } from "./TableProvider";

interface CommonProps {
  children: ReactNode;
}

interface CommonRowProps {
  role?: string;
  children: ReactNode;
  className?: string;
}

interface StyledRowProps {
  children: ReactNode;
  role?: string;
}

interface BodyProps<T> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
}

const StyledTable = ({ children, role }: CommonRowProps) => (
  <div role={role} className="overflow-hidden  bg-white text-xl">
    {children}
  </div>
);

const CommonRow = ({ children, role = "row", className }: CommonRowProps) => {
  const style =
    "grid items-center transition-none grid-cols-[repeat(6,1fr)_1.4fr] justify-items-center " +
    className;
  return (
    <div role={role} className={style}>
      {children}
    </div>
  );
};

const StyledHeader = ({ children }: CommonProps) => (
  <CommonRow role="row" className="  px-6 py-4 text-sm font-bold -mx-14 ">
    {children}
  </CommonRow>
);

const StyledRow = ({ children, role }: StyledRowProps) => (
  <CommonRow
    role={role}
    className="border-b  border-gray-100 bg-white -mx-14 px-6 py-3 text-sm first:mt-[-4px] last:mb-[-4px] last:border-b-0 hover:bg-stone-50"
  >
    {children}
  </CommonRow>
);

const StyledBody = ({ children }: CommonProps) => (
  <section className="my-1">{children}</section>
);

const Footer = ({ children }: CommonProps) => (
  <footer className="flex justify-center bg-gray-50 py-3">{children}</footer>
);

const Empty = ({ children }: CommonProps) => (
  <p className="m-6 text-center text-base font-medium">{children}</p>
);

const Table = ({ children }: CommonProps) => (
  <TableProvider>
    <StyledTable role="table">{children}</StyledTable>
  </TableProvider>
);

const Header = ({ children }: { children: ReactNode }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const Row = ({ children, role }: { children: ReactNode; role?: string }) => {
  return <StyledRow role={role}>{children}</StyledRow>;
};

const Body = <T,>({ data, render }: BodyProps<T>) => {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
