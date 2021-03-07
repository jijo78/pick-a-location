export const getTypeLabel = (type: string | undefined) => {
  if (type === 'City') return 'City'
  if (type === 'Station') return 'Station'
  if (type === 'Airport') return 'Airport'
  if (type === 'Place') return 'Place'
  if (type === 'District') return 'District'
  if (type === 'Region') return 'Region'
}
