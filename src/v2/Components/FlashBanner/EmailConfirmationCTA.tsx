import React from "react"
import { Button } from "@artsy/palette/dist/elements/Button"
import { Sans } from "@artsy/palette/dist/elements/Typography"
import {
  AnalyticsSchema as Schema,
  useSystemContext,
  useTracking,
} from "v2/Artsy"
import { requestEmailConfirmation } from "./requestEmailConfirmationMutation"
import createLogger from "v2/Utils/logger"

const logger = createLogger("v2/Components/FlashBanner/EmailConfirmationCTA")

export const EmailConfirmationCTA: React.FC = () => {
  const [afterSubmitContent, setAfterSubmitContent] = React.useState<string>(
    null
  )
  const { relayEnvironment } = useSystemContext()
  const { trackEvent } = useTracking()

  const handleSubmit = () => {
    trackEvent({
      action_type: Schema.ActionType.Click,
      subject: Schema.Subject.EmailConfirmationCTA,
    })
    requestEmailConfirmation(relayEnvironment)
      .then(({ sendConfirmationEmail: { confirmationOrError } }) => {
        const emailToConfirm = confirmationOrError?.unconfirmedEmail

        if (emailToConfirm) {
          setAfterSubmitContent(`An email has been sent to ${emailToConfirm}`)
        } else {
          const mutationError = confirmationOrError?.mutationError

          switch (mutationError?.message || mutationError?.error) {
            case "email is already confirmed":
              setAfterSubmitContent("Your email is already confirmed")
              break
            default:
              setAfterSubmitContent("Something went wrong. Try again?")
              break
          }
        }
      })
      .catch(reason => logger.error(JSON.stringify(reason)))
  }

  if (!afterSubmitContent) {
    return (
      <>
        Please verify your email address{" "}
        <Button variant="primaryWhite" mx={1} inline onClick={handleSubmit}>
          <Sans size="3" py={0.5} px={2} lineHeight={0.2}>
            Send email
          </Sans>
        </Button>
      </>
    )
  } else {
    return <>{afterSubmitContent}</>
  }
}
