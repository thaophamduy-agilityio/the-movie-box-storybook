// Components
import Button from "../Button";

// Constant
import { VARIANT_BUTTON } from "@/constants";

const Header = () => {
  /**
   * Handle on click
   * @param {function} handleOnClick
   */
  const handleOnClick = (): void => {
    // Handle on click here
  };

  return (
    <header className="relative flex justify-between z-10 px-10 py-2">
      <h1 data-testid="logo" className="text-white text-3xl uppercase">
        themovieBOX
      </h1>
      <div className="flex items-center">
        <Button variant={VARIANT_BUTTON.ICON} onClick={handleOnClick}>
          {""}
        </Button>
        <Button
          additionalClass="text-md"
          variant={VARIANT_BUTTON.TEXT}
          onClick={handleOnClick}
        >
          Log in
        </Button>
        <Button
          additionalClass="text-md"
          variant={VARIANT_BUTTON.PRIMARY}
          onClick={handleOnClick}
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
