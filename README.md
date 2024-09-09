# Nuxt + Bun + WebSockets issue
## Issue description
See: https://github.com/unjs/nitro/issues/...............................

## Steps to reproduce
1. Install using `bun i` with bun version 1.1.27.
2. Run `bun --bun run dev` and open the dev URL.
3. Note that the WebSocket's status remains 'CONNECTING'.
4. Run `bun --bun run build` (note that the Nitro preset is set to `bun` in `nuxt.config.ts`).
5. Run `bun --bun run preview` and open the preview URL.
6. Note that the WebSocket's status becomes 'OPEN'.
