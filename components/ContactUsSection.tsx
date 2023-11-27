import React from "react";

import { getTranslations } from "next-intl/server";

interface ContactUsSectionContent {
  title: string;
  phoneNumber: string;
  contactEmail: string;
}
const ContactUsSection = async (
  { contactUsSectionContent }: {
    contactUsSectionContent: ContactUsSectionContent;
  },
) => {
  const t = await getTranslations("contactUs");

  return (
    <>
      <div className="w-screen flex justify-center bg-alternate-background">
        <div className="w-full lg:w-[90%] xl:w-[80%] md:px-6">
          <div className="py-8">
            <h1 className="m-2 md:m-4 break-words text-4xl md:text-5xl underline decoration-dashed decoration-secondary">
              {contactUsSectionContent.title}
            </h1>
            <div className="flex flex-col lg:flex-row p-2 md:p-8 justify-center items-center gap-y-8 lg:gap-y-0 lg:gap-x-12">
              {/* full name */}
              <form
                action=""
                className="p-6 flex flex-col gap-y-2 border-2 border-secondary border-dashed rounded-md bg-background"
              >
                <h1 className="text-4xl my-4">{t("emailForm.title")}</h1>
                <div className="flex flex-col md:flex-row gap-x-4">
                  <div className="w-full">
                    <label htmlFor="first-name">
                      {t("emailForm.fields.firstName")}
                    </label>
                    <input
                      name="first-name"
                      type="text"
                      className="block px-2 w-full h-10 border-2 border-secondary border-dashed rounded-md focus:outline-none focus:border-solid"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="second-name">
                      {t("emailForm.fields.lastName")}
                    </label>
                    <input
                      name="last-name"
                      type="text"
                      className="block px-2 h-10 w-full border-2 border-secondary border-dashed rounded-md focus:outline-none focus:border-solid"
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <label htmlFor="email-address">
                  {t("emailForm.fields.emailAddress")}
                </label>
                <input
                  name="email-address"
                  type="email"
                  className="block px-2 w-full h-10 border-2 border-secondary border-dashed rounded-md focus:outline-none focus:border-solid"
                  required
                />
                {/* Object */}
                <label htmlFor="email-subject">
                  {t("emailForm.fields.subject")}
                </label>
                <input
                  name="email-subject"
                  type="text"
                  className="block px-2 w-full h-10 border-2 border-secondary border-dashed rounded-md focus:outline-none focus:border-solid"
                  required
                />

                <label htmlFor="email-message">
                  {t("emailForm.fields.message")}
                </label>
                <textarea
                  name="email-message"
                  id=""
                  cols={30}
                  rows={10}
                  className="block px-2 py-2 w-full border-2 border-secondary border-dashed rounded-md focus:outline-none focus:border-solid"
                  required
                >
                </textarea>{" "}
                <input
                  type="submit"
                  className="cursor-pointer inline-block w-fit px-4 py-2 border-2 border-secondary border-dashed rounded-md active:border-solid"
                  value={t("emailForm.fields.sendButton")}
                />
              </form>
              <h1 className="text-4xl underline decoration-dashed decoration-secondary">
                {t("or")}
              </h1>
              <div className="p-6 border-2 border-secondary border-dashed rounded-md bg-background hover">
                <h1 className="text-center text-4xl">
                  {t("phoneNumberSection.message")}
                </h1>
                <h1 className="text-4xl text-secondary">
                  {contactUsSectionContent.phoneNumber}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
