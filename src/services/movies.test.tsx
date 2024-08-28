// Services
import { getMovies } from "./index";

describe("sale of services", () => {
  it("should call fetch data if getMovies is called", async () => {
    const responseData = {
      message: "Fetch success",
    };
    const mockFetch = jest.fn();
    const mockResponse = {
      ok: true,
      json: mockFetch.mockResolvedValue(responseData),
    };

    // Mock fetch
    global.fetch = mockFetch.mockResolvedValue(mockResponse);
    await getMovies();
    expect(mockFetch).toHaveBeenCalled();
  });

  it("should throw an error if call getMovies falsed", async () => {
    const responseData = {
      message: "Fetch false",
    };
    const mockFetch = jest.fn();
    const mockResponse = {
      ok: false,
      json: mockFetch.mockResolvedValue(responseData),
    };

    // Mock fetch
    global.fetch = mockFetch.mockResolvedValue(mockResponse);

    expect(async () => {
      await getMovies();
    }).rejects.toThrow();
  });
});
