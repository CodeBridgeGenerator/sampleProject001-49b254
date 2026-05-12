import React from "react";
import { render, screen } from "@testing-library/react";

import EInvoiceEditDialogComponent from "../EInvoiceEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders EInvoice edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EInvoiceEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("EInvoice-edit-dialog-component")).toBeInTheDocument();
});
