import { Checkbox, useThemeConfig } from "@artsy/palette"
import React from "react"
import {
  MultiSelectArtworkFilters,
  useArtworkFilterContext,
} from "../ArtworkFilterContext"

export type Result = {
  name: string
  value: string
}

type ResultOptionProps = Result & {
  facetName: keyof MultiSelectArtworkFilters
}

export const ResultOption: React.FC<ResultOptionProps> = ({
  facetName,
  name,
  value,
}) => {
  const { currentlySelectedFilters, setFilter } = useArtworkFilterContext()
  // @ts-expect-error STRICT_NULL_CHECK
  const results = currentlySelectedFilters()[facetName]

  const handleSelect = (value: string) => (selected: boolean) => {
    setFilter(
      facetName,
      selected
        ? // Append
          // @ts-expect-error STRICT_NULL_CHECK
          [...results, value]
        : // Remove
          // @ts-expect-error STRICT_NULL_CHECK
          results.filter(item => item !== value)
    )
  }

  const tokens = useThemeConfig({
    v2: { my: 0.5 },
    v3: { my: 1 },
  })

  return (
    <Checkbox
      onSelect={handleSelect(value)}
      // @ts-expect-error STRICT_NULL_CHECK
      selected={results.includes(value)}
      key={value}
      my={tokens.my}
    >
      {name}
    </Checkbox>
  )
}
