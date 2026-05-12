import React from "react";
import { render, screen } from "@testing-library/react";

import EInvoiceCreateDialogComponent from "../EInvoiceCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders EInvoice create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EInvoiceCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("EInvoice-create-dialog-component")).toBeInTheDocument();
});
