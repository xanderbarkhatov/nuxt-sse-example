import { createHooks } from "hookable"

type SSEHooks = {
  message: (data: any) => void
}

export const sseHooks = createHooks<SSEHooks>()
