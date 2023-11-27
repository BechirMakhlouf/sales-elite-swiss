import { Rule, SchemaTypeDefinition } from "sanity";
const offer: SchemaTypeDefinition = {
  name: "offer",
  title: "offer",
  type: "document",
  fields: [{
    name: "offerTitle",
    title: "Offer Title",
    type: "string",
  }, {
    name: "offerDescription",
    title: "offer description",
    type: "text",
  }],
};

const people: SchemaTypeDefinition = {
  name: "people",
  title: "people",
  type: "document",
  fields: [
    {
      name: "picture",
      title: "Picture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{
        name: "alt",
        title: "image description",
        type: "string",
      }],
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
const HeroSectionSchema: SchemaTypeDefinition = {
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [{
    name: "message",
    title: "Main Message",
    type: "string",
    validation: (Rule) => Rule.required(),
  }, {
    name: "description",
    title: "description",
    type: "text",
    validation: (Rule) => Rule.required(),
  }, {
    name: "cta",
    title: "Call To Action Button",
    type: "string",
    validation: (Rule) => Rule.required(),
  }, {
    name: "image",
    title: "Hero Section Image",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: "alt",
        title: "Image Description",
        type: "string",
      },
    ],
  }],
};
const ServicesSectionSchema = {
  name: "ServicesSection",
  title: "Services Section",
  type: "document",
  fields: [{
    name: "servicesSectionTitle",
    title: "Services Section Title",
    type: "string",
  }, {
    name: "paragraphTitle",
    title: "Paragraph Title",
    type: "string",
  }, {
    name: "servicesDescription",
    title: "Services Section Description",
    type: "text",
  }, {
    name: "image",
    title: "Section Image",
    type: "image",
    options: {
      hotspot: true,
    },
  }, {
    name: "offers",
    title: "Offers",
    type: "array",
    of: [offer],
    validation: (Rule: Rule) => Rule.max(3),
  }],
};

const AboutUsSchema = {
  name: "AboutUsSection",
  title: "About Us Section",
  type: "object",
  fields: [{
    name: "aboutUsSectionTitle",
    title: "About Us Section Title",
    type: "string",
  }, {
    name: "People",
    title: "People",
    type: "array",
    of: [people],
  }],
};

const ContactUsSchema: SchemaTypeDefinition = {
  name: "contactUsSection",
  title: "Contact Us Section",
  type: "document",
  fields: [{
    name: "title",
    title: "Section Title",
    type: "string",
  }, {
    name: "phoneNumber",
    title: "Phone Number",
    type: "string",
  }, {
    name: "contactEmail",
    title: "Contact Email",
    type: "string",
  }],
};

const LandingPage = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "landingPageLocale",
      title: "Landing Page Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "German", value: "de" },
        ],
      },
    },
    HeroSectionSchema,
    ServicesSectionSchema,
    AboutUsSchema,
    ContactUsSchema,
  ],
};

export default LandingPage;
