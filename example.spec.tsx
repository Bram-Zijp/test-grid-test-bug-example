import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback } from "react";
import "ag-grid-enterprise";

it("calls context actions on click", async () => {
  const start = performance.now();
  const testCallback = jest.fn();
  render(<Example testCallback={testCallback} />);
  const testColumn = await screen.findByText("testString");
  console.log("found test column", performance.now() - start);
  await userEvent.pointer({
    keys: "[MouseRight]",
    target: testColumn,
  });
  const testContextItem = await screen.findByText("Custom context");
  console.log("found context item", performance.now() - start);
  await userEvent.click(testContextItem);
  console.log("clicked context item", performance.now() - start);
  await waitFor(() => {
    expect(testCallback).toHaveBeenCalled();
  });
});

const rowData = [{ test: "testString" }];
const columnDefs = [{ field: "test" }];

function Example({ testCallback }) {
  const getContextMenuItems = useCallback(() => {
    console.log("getContextMenuItems callback");

    return [
      {
        name: `Custom context`,
        action: () => {
          console.log("context click action handler");
          testCallback();
        },
      },
    ];
  }, [testCallback]);
  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      getContextMenuItems={getContextMenuItems}
    />
  );
}
