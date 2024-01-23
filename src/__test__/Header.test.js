import { Provider } from "react-redux";
import Header from "../components/Header";
import { screen, render, fireEvent } from "@testing-library/react";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render a login button Inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });

  expect(button).toBeInTheDocument();
});

it("should test login button working Inside component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });

  fireEvent.click(button);

  expect(button).toBeInTheDocument();

  const button2 = screen.getByRole("button", { name: "LogOut" });

  expect(button).toBeInTheDocument();
});
