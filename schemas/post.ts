import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'article',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL (NE RIEN ECRIRE. Appuyer juste sur "Generate" pour générer une URL à partir du titre)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait (1 ou 2 phrases seulement)',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image de l\'article (Choisissez en une a partir de Loupe>Unsplash))',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Article entier',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
