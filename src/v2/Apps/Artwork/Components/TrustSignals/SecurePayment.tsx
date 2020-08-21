import { LockIcon } from "@artsy/palette/dist/svgs/LockIcon"
import { Link } from "@artsy/palette/dist/elements/Link"
import { SecurePayment_artwork } from "v2/__generated__/SecurePayment_artwork.graphql"
import React from "react"
import { createFragmentContainer } from "react-relay"
import { graphql } from "react-relay"
import { TrustSignal, TrustSignalProps } from "./TrustSignal"

interface SecurePaymentProps
  extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
  artwork: SecurePayment_artwork
}

export const SecurePayment: React.FC<SecurePaymentProps> = ({
  artwork,
  ...other
}) => {
  return (
    (artwork.is_acquireable || artwork.is_offerable) && (
      <TrustSignal
        Icon={<LockIcon />}
        label="Secure payment"
        description={
          <>
            {"Secure transactions by credit card through Stripe."}
            <br />
            <Link
              href="https://stripe.com/docs/security/stripe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
            {"."}
          </>
        }
        {...other}
      />
    )
  )
}

export const SecurePaymentFragmentContainer = createFragmentContainer(
  SecurePayment,
  {
    artwork: graphql`
      fragment SecurePayment_artwork on Artwork {
        is_acquireable: isAcquireable
        is_offerable: isOfferable
      }
    `,
  }
)
