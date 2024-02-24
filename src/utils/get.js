import { toNumber } from '~/utils/number'

export function getUserHcp (hcp) {
  if (!hcp) return hcp

  const hcpNumber = toNumber(hcp)
  return hcpNumber < 0 ? `+${Math.abs(hcpNumber)}` : hcpNumber
}
