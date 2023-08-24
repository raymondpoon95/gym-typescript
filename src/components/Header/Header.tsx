type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </div>
  );
};

export default Header;
