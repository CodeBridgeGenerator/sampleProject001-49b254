import React from "react";
import { render, screen } from "@testing-library/react";

import EInvoicePage from "../EInvoicePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders EInvoice page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EInvoicePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("EInvoice-datatable")).toBeInTheDocument();
    expect(screen.getByRole("EInvoice-add-button")).toBeInTheDocument();
});
