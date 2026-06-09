Read `AGENTS.md` before starting

We're adding the design system and UI primitive components to the context. This will allow us to build the UI of the agent builder and other features using these components, ensuring a consistent look and feel across the application.

Install and configure `shadcn/ui`.

Add these shadcn/ui components to the context:
- Button
- Card
- Dialog
- Tabs
- Input
- Textarea
- ScrollArea

Do not modify the generated `components/ui/*` files after installation, as they will be overwritten when the design system is updated. Instead, use these components in your feature development to ensure consistency and maintainability.

Also Install `lucide-react` for icons and add it to the context. This will allow us to use a wide range of icons in our UI components, enhancing the visual appeal and usability of the application.

Create `lib/utils.ts` with a resuable `cn()` helper for merging Tailwind classes.

Ensure all components match the existing dark theme in `global.css`.

### Check when done 
- All components import without errors
- `cn()` works properly for merging Tailwind classes
- No default light styling appears.
