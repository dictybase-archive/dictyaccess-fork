// @flow
import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"

/** Function to filter data by specified strand */
const dataStrandFilter = (data: Array<Object>, strand: string) =>
  data
    .filter((item: Object) => item.attributes.strand === strand)
    .map((d: Object) => ({
      block_id: chrNameMapper(d.attributes.block_id),
      end: d.attributes.end,
      start: d.attributes.start,
      strand: d.attributes.strand,
      id: d.id,
    }))

export default dataStrandFilter