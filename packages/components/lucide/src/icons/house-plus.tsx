import { forwardRef } from "@yamada-ui/core"
import { HousePlus as HousePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HousePlusProps = LucideIconProps

/**
 * `HousePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlus = forwardRef<HousePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HousePlusIcon} {...props} />
))
