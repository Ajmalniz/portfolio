import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '1zkhrsb1',
  dataset: 'production',

  plugins: [
    deskTool(),
    // Remove this line if you don't need the vision tool
    // visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
