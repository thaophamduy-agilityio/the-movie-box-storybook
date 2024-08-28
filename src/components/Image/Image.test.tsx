// Libs
import { render } from "@testing-library/react";

// Components
import Image from "./index";

describe("Image", () => {
  const props = {
    imageSrc: "src/assets/images/movies/logan.webp",
    altText: "Logan",
    size: {
      width: 146,
      height: 185,
    },
  };

  test("Should match snapshot", async () => {
    const container = render(<Image {...props} />);

    expect(container).toMatchSnapshot();
  });
});
