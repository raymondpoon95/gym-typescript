import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../common/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
