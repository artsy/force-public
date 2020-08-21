import React from "react"

import { AuctionIcon } from "@artsy/palette/dist/svgs/AuctionIcon"
import { EditIcon } from "@artsy/palette/dist/svgs/EditIcon"
import { EnvelopeIcon } from "@artsy/palette/dist/svgs/EnvelopeIcon"
import { Box } from "@artsy/palette/dist/elements/Box"
import { Button } from "@artsy/palette/dist/elements/Button"
import { Flex } from "@artsy/palette/dist/elements/Flex"
import { Sans, Serif } from "@artsy/palette/dist/elements/Typography"
import { Spacer } from "@artsy/palette/dist/elements/Spacer"

import { ArtistConsignHowToSell_artist } from "v2/__generated__/ArtistConsignHowToSell_artist.graphql"

import { AnalyticsSchema, useTracking } from "v2/Artsy"
import { RouterLink } from "v2/Artsy/Router/RouterLink"
import { createFragmentContainer, graphql } from "react-relay"
import { SectionContainer } from "./SectionContainer"
import { Subheader } from "./Subheader"
import { getConsignSubmissionUrl } from "./Utils/getConsignSubmissionUrl"

interface ArtistConsignHowtoSellProps {
  artist: ArtistConsignHowToSell_artist
}

const ArtistConsignHowtoSell: React.FC<ArtistConsignHowtoSellProps> = ({
  artist,
}) => {
  const tracking = useTracking()

  return (
    <SectionContainer height="100%" background="black10">
      <Box textAlign="center">
        <Subheader>How to sell your collection with Artsy</Subheader>

        <Spacer my={2} />

        <Flex
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <Section
            icon={<EditIcon width={30} height={30} />}
            text="Submit once"
            description="Submit your artwork details and images. Artsy will review and
            approve qualified submissions for consignment."
          />
          <Section
            icon={<EnvelopeIcon width={30} height={30} />}
            text="Receive offers"
            description="If your work is accepted, you’ll receive competitive consignment
            offers from auction houses, galleries, and collectors."
          />
          <Section
            icon={<AuctionIcon width={30} height={30} />}
            text="Match & sell"
            description="With our specialists’ expert guidance and advisement, evaluate
            your offers, choose the best offer for you and sell your work."
          />
        </Flex>

        <Spacer mt={6} />

        <Box>
          <RouterLink
            to={getConsignSubmissionUrl({
              contextPath: artist.href,
              subject: AnalyticsSchema.Subject.RequestPriceEstimate,
            })}
            onClick={() => {
              tracking.trackEvent({
                action_type: AnalyticsSchema.ActionType.Click,
                context_module:
                  AnalyticsSchema.ContextModule.HowToSellYourCollection,
                flow: AnalyticsSchema.Flow.Consignments,
                subject: AnalyticsSchema.Subject.RequestPriceEstimate,
              })
            }}
          >
            <Button>Request a price estimate</Button>
          </RouterLink>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export const ArtistConsignHowtoSellFragmentContainer = createFragmentContainer(
  ArtistConsignHowtoSell,
  {
    artist: graphql`
      fragment ArtistConsignHowToSell_artist on Artist {
        href
      }
    `,
  }
)

const Section: React.FC<{
  icon: React.ReactNode
  text: string
  description: string
}> = ({ icon, text, description }) => {
  return (
    <Box width={["100%", "25%"]} height={["100%", 170]} my={[3, 0]} mx={2}>
      <Box>{icon}</Box>
      <Box mt={1} mb={2}>
        <Sans size="5">{text}</Sans>
      </Box>
      <Box>
        <Serif size="4">{description}</Serif>
      </Box>
    </Box>
  )
}
