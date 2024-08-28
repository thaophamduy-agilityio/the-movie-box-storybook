// Libs
import { render, screen } from "@testing-library/react";

// Components
import App from "./App";

// Services
import { getMovies } from "@/services";

describe("App", () => {
  it("should render the movies with fetched data", async () => {
    const responseData = [
      {
        id: 1,
        publicYear: 2017,
        imgSrc: "src/assets/images/movies/logan.webp",
        title: "Logan",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 4.2,
        duration: "1h 52m",
        isHeroMovie: false,
        reviews: 3.546,
      },
    ];
    const mockFetch = jest.fn();
    const mockResponse = {
      ok: true,
      json: mockFetch.mockResolvedValue(responseData),
    };
    global.fetch = mockFetch.mockResolvedValue(mockResponse);
    await getMovies();
    expect(mockFetch).toHaveBeenCalled();
  });

  test("renders heading", async () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "themovieBOX" }),
    ).toBeInTheDocument();
  });
});
