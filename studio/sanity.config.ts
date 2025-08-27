import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'The Josie Collective',
  projectId: 'y0675cd1',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [],   // you can add document types later
  },
})
