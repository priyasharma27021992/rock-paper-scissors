type PageProps = {
   children: React.ReactNode | React.ReactNode[];
};

const Page = ({ children }: PageProps) => {
   return <div>{children}</div>;
};

export default Page;
