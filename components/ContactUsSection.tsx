import React from "react";
import { getTranslations } from "next-intl/server";
import EmailForm, { FormTranslations } from "./EmailForm";

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
  const formTranslations: FormTranslations = {
    title: t("emailForm.title"),
    firstName: t("emailForm.fields.firstName"),
    lastName: t("emailForm.fields.lastName"),
    emailAddress: t("emailForm.fields.emailAddress"),
    subject: t("emailForm.fields.subject"),
    message: t("emailForm.fields.message"),
    sendButton: t("emailForm.fields.sendButton"),
  };
  return (
    <>
      <div
        id="contactus-section"
        className="min-h-screen w-screen flex justify-center bg-alternate-background"
      >
        <div className="w-full lg:w-[90%] xl:w-[80%] md:px-6">
          <div className="py-8">
            <h1 className="m-2 md:m-4 break-words text-4xl md:text-5xl underline decoration-dashed decoration-secondary">
              {contactUsSectionContent.title}
            </h1>
            <div className=" flex flex-col xl:flex-row p-2 md:p-8 justify-center items-center gap-y-8 xl:gap-y-0 xl:gap-x-12">
              {/* full name */}
              <div className="h-[80%] max-h-[800px]">
                <EmailForm formTranslations={formTranslations} />
              </div>
              <h1 className="text-4xl underline decoration-dashed decoration-secondary">
                {t("or")}
              </h1>
              <div className="p-6 border-2 border-secondary border-dashed rounded-md bg-background hover:border-solid transition-all">
                <h1 className="text-center text-3xl break-keep">
                  {t("phoneNumberSection.message")}
                </h1>
                <h1 className="w-full text-3xl break-keep text-secondary text-center">
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
