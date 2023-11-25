import { SchemaTypeDefinition } from "sanity";

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
    },
    {
      "name": "firstName",
      "title": "First Name",
      "type": "string",
    },
    {
      "name": "middlename",
      "title": "Middle Name",
      "type": "string",
    },
    {
      "name": "lastName",
      "title": "Last Name",
      "type": "string",
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
  type: "document",
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
    name: "heroSectionImage",
    title: "Hero Section Image",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: "alt",
        title: "alt",
        type: "string",
      },
    ],
  }],
};
const ServicesSectionSchema: SchemaTypeDefinition = {
  name: "ServicesSection",
  title: "Services Section",
  type: "document",
  fields: [{
    name: "servicesSectionTitle",
    title: "Services Section Title",
    type: "string",
  }, {
    name: "servicesDescription",
    title: "Services Section Description",
    type: "text",
  }, {
    name: "offers",
    title: "Offers",
    type: "array",
    of: [offer],
  }],
};

const AboutUsSchema: SchemaTypeDefinition = {
  name: "AboutUsSection",
  title: "About Us Section",
  type: "document",
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
    name: "phoneNumber",
    title: "Phone Number",
    type: "string",
  }, {
    name: "contactEmail",
    title: "Contact Email",
    type: "string",
  }],
};

const LandingPage: SchemaTypeDefinition = {
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
          { title: "EN", value: "English" },
          { title: "DE", value: "German" },
        ],
      },
    },
    ,
    HeroSectionSchema,
    ServicesSectionSchema,
    AboutUsSchema,
    ContactUsSchema,
  ],
};

export default LandingPage;
