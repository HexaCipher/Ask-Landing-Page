# Laptop Frame for Hero Terminal

## Summary
Introduce a pure-CSS laptop frame that wraps the animated terminal demo in the hero section. The frame should feel minimal and premium, matching the existing light "Quietude" theme, while giving the terminal the visual presence of a laptop screen.

## Goals
- Make the terminal demo read as a laptop screen on desktop sizes.
- Keep the layout responsive with no horizontal overflow.
- Preserve the current terminal animation and content.
- Maintain the existing light, minimal visual language.

## Non-Goals
- No SVG/PNG device frames.
- No functional changes to terminal animation logic.
- No new interactions or navigation changes.

## UX & Visual Design
- **Bezel:** A rounded rectangular frame with subtle border and soft shadow.
- **Camera notch:** A small, centered dot at the top bezel, very subtle.
- **Glass highlight:** Faint vertical gradient overlay across the screen.
- **Base/hinge:** A thin rounded bar beneath the screen, with a soft gradient and a slight shadow.
- **Tone:** Light neutrals with the current indigo accent; avoid heavy contrast.

## Component Structure
- Add a new `LaptopFrame` component that accepts children.
- In `Hero`, render:
  - `LaptopFrame` as the wrapper
  - `TerminalWindow` as the screen content
- Update `TerminalWindow` to remove its own max width and outer margin so the frame controls sizing.

## Layout & Responsiveness
- Desktop: target a wider presence similar to a laptop screen (max width around 980 to 1080px).
- Tablet: scale down proportionally with full width container and internal padding.
- Mobile: allow the frame to shrink to fit; preserve padding and avoid overflow.
- All sizing should be fluid (`w-full`, `max-w-*`) with internal padding instead of fixed widths.

## Accessibility
- Keep existing `role` and `aria-label` for the terminal region.
- Ensure any decorative elements are non-interactive and do not steal focus.

## Acceptance Criteria
- The hero demo appears inside a laptop-like frame on desktop.
- No horizontal scrollbar appears at any breakpoint.
- Terminal animation behavior is unchanged.
- The frame matches the current light theme and does not feel heavy.

## Testing Notes
- Visual check on desktop, tablet, and mobile widths.
- Verify reduced-motion behavior still shows all lines.
- Confirm no overflow on the main page container.
