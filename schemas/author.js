export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
