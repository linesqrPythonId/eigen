import { act } from "@testing-library/react-native"
import { renderWithWrappers } from "app/tests/renderWithWrappers"
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils"
import {
  requestForPriceEstimateMutation,
  RequestForPriceEstimateScreen,
} from "./RequestForPriceEstimateScreen"

describe("RequestForPriceEstimateScreen", () => {
  const props = {
    artworkID: "artworkId",
    artworkSlug: "artworkSlug",
    name: "Tester HQ",
    email: "tester@hq.com",
    phone: "+49123456898",
  }

  it("renders without errors", () => {
    renderWithWrappers(<RequestForPriceEstimateScreen {...props} />)
  })

  describe("requestForPriceEstimateMutation", () => {
    const input = {
      artworkId: "artworkId",
      artworkSlug: "artworkSlug",
      requesterName: "My Name is",
      requesterEmail: "email@email.com",
      requesterPhoneNumber: "+4912345",
    }

    const environment = createMockEnvironment()

    const onCompleted = jest.fn()

    it("sends Request", () => {
      requestForPriceEstimateMutation(environment, onCompleted, jest.fn(), input)
      const operation = environment.mock.getMostRecentOperation()
      act(() => {
        environment.mock.resolve(operation, MockPayloadGenerator.generate(operation))
      })
      expect(onCompleted).toBeCalled()
    })
  })
})
