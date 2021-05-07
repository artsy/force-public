import { Column, GridColumns, Text } from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { TagApp_tag } from "v2/__generated__/TagApp_tag.graphql"
import { HorizontalPadding } from "../Components/HorizontalPadding"
import { TagMetaFragmentContainer } from "./Components/TagMeta"
import { TagArtworkFilterRefetchContainer } from "./Components/TagArtworkFilter"

interface TagAppProps {
  tag: TagApp_tag
}

const TagApp: React.FC<TagAppProps> = ({ tag }) => {
  return (
    <>
      <TagMetaFragmentContainer tag={tag} />

      <>
        <HorizontalPadding>
          <GridColumns my={4} gridRowGap={[2, 0]}>
            <Column span={6}>
              <Text as="h1" variant="xl" mb={2}>
                {tag.name}
              </Text>
            </Column>
          </GridColumns>

          <TagArtworkFilterRefetchContainer tag={tag} />
        </HorizontalPadding>
      </>
    </>
  )
}

export const TagAppFragmentContainer = createFragmentContainer(TagApp, {
  tag: graphql`
    fragment TagApp_tag on Tag
      @argumentDefinitions(input: { type: "FilterArtworksInput" }) {
      ...TagArtworkFilter_tag @arguments(input: $input)
      ...TagMeta_tag
      name
    }
  `,
})
