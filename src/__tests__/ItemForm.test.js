// Import necessary testing utilities
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

// Describe your test suite
describe("ItemForm component", () => {
  // Test case for form submission callback
  test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
    // Mock callback function
    const onItemFormSubmit = jest.fn();

    // Render the component with the mock callback
    render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

    // Simulate input changes
    fireEvent.change(screen.queryByLabelText(/Name/), {
      target: { value: "Ice Cream" },
    });

    fireEvent.change(screen.queryByLabelText(/Category/), {
      target: { value: "Dessert" },
    });

    // Find the form and submit it
    fireEvent.submit(screen.getByTestId("item-form"));

    // Assert that the callback was called with the expected arguments
    expect(onItemFormSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(String),
        name: "Ice Cream",
        category: "Dessert",
      })
    );
  });
});
