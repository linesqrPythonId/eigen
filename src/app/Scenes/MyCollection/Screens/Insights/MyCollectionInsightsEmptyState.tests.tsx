import { fireEvent } from "@testing-library/react-native"
import { navigate, popToRoot } from "app/navigation/navigate"
import { Tab } from "app/Scenes/MyProfile/MyProfileHeaderMyCollectionAndSavedWorks"
import { renderWithWrappers } from "app/tests/renderWithWrappers"
import { MyCollectionInsightsEmptyState } from "./MyCollectionInsightsEmptyState"

describe("MyCollectionInsightsEmptyState", () => {
  it("navigates to add work page when the user presses on add works", () => {
    const { getAllByText } = renderWithWrappers(<MyCollectionInsightsEmptyState />)
    const uploadArtworkButton = getAllByText("Upload Artwork")[0]

    fireEvent(uploadArtworkButton, "press")
    expect(navigate).toHaveBeenCalledWith("my-collection/artworks/new", {
      passProps: {
        mode: "add",
        onSuccess: popToRoot,
        source: Tab.insights,
      },
    })
  })
})
