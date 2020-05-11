import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Results from "../views/Results";
import configureStore from "../store/store";
import { photos } from "../__response__mocks/photos";
import { photosByQuery } from "../__response__mocks/photosByQuery";

const store = configureStore();

const renderResults = (path) => {
  const history = createBrowserHistory();
  history.push(path);
  return render(
    <Provider store={store}>
      <Router history={history}>
        <Results />
      </Router>
    </Provider>
  );
};

const mockManifest = {
  photo_manifest: {
    landing_date: "2004-01-04",
    max_sol: 2208,
    max_date: "2010-03-21",
  },
};

global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({ ok: true, json: () => mockManifest })
  )
  .mockImplementationOnce(() =>
    Promise.resolve({ ok: true, json: () => photosByQuery })
  );

describe("Results component", () => {
  it("gets data from url and renders filled form", async () => {
    const { getByLabelText } = renderResults(
      "/results?rover=Spirit&latest=undefined&sol=35&date="
    );
    await waitFor(() => {
      expect(getByLabelText(/choose rover/i)).toHaveValue("Spirit");
      expect(getByLabelText(/SOL from 0/i)).toHaveValue("35");
    });
  });
  it("gets data from url and renders gallery with photos", async () => {
    const { getAllByAltText } = renderResults(
      "/results?rover=Spirit&latest=undefined&sol=35&date="
    );
    const rover = photosByQuery.photos[0].rover.name;
    await waitFor(() => {
      expect(getAllByAltText(`Mars by rover ${rover}`)[0]).toBeInTheDocument();
    });
  });
  it("shows SearchModal for mobile look", () => {});
  it("displays form on the left for desktop look", () => {});
});
