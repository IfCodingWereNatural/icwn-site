// sample JSON Schema
export const schema = {
  title: 'Longitude and Latitude Values',
  description: 'A geographical coordinate.',
  required: ['latitude', 'longitude'],
  type: 'object',
  properties: {
    latitude: {
      type: 'number',
      minimum: -90,
      maximum: 90,
    },
    longitude: {
      type: 'number',
      minimum: -180,
      maximum: 180,
    },
  },
}
