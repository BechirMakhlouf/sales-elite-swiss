import { revalidatePath } from "next/cache";
import { Resend } from "resend";
export interface FormTranslations {
  title: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
  sendButton: string;
}

const resend = new Resend("re_7NkRqsXa_Lb8SGi5GS4mr5VetcMNHuxWe");

const EmailForm = (
  { formTranslations }: { formTranslations: FormTranslations },
) => {
  const handleEmail = async (formData: FormData) => {
    "use server";

    const emailInfo = {
      fistName: formData.get("first-name"),
      lastName: formData.get("first-name"),
      emailAddress: formData.get("email-address"),
      subject: formData.get("subject"),
      message: formData.get("email-message"),
    };
    resend.emails.send({
      from: "SalesEliteSwissWebsite@resend.dev",
      to: "bechirmakhlouf2020@gmail.com",
      subject: "Hello World",
      html: `
      Sender Name: <b>${emailInfo.fistName} ${emailInfo.lastName}</b><br />
      Sender Email: <i>${emailInfo.emailAddress}</i><br />
      <br /> 
      Email Message: <br />
      <p>
      ${emailInfo.message}
      </p>
    `,
    });

    revalidatePath("/");
  };
  return (
    <>
      <form
        action={handleEmail}
        className="h-full p-6 flex flex-col gap-y-2 border-2 border-secondary   rounded-md bg-background"
      >
        <h1 className="text-4xl my-4">{formTranslations.title}</h1>
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="w-full">
            <label htmlFor="first-name">
              {formTranslations.firstName}
            </label>
            <input
              name="first-name"
              type="text"
              className="block px-2 w-full h-10 border border-secondary  rounded-md focus:outline-none focus:border-2"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="second-name">
              {formTranslations.lastName}
            </label>
            <input
              name="last-name"
              type="text"
              className="block px-2 h-10 w-full border border-secondary  rounded-md focus:outline-none focus:border-2"
              required
            />
          </div>
        </div>
        {/* Email */}
        <label htmlFor="email-address">
          {formTranslations.emailAddress}
        </label>
        <input
          name="email-address"
          type="email"
          className="block px-2 w-full h-10 border border-secondary  rounded-md focus:outline-none focus:border-2"
          required
        />
        {/* Object */}
        <label htmlFor="email-subject">
          {formTranslations.subject}
        </label>
        <input
          name="email-subject"
          type="text"
          className="block px-2 w-full h-10 border border-secondary  rounded-md focus:outline-none focus:border-2"
          required
        />

        <label htmlFor="email-message">
          {formTranslations.message}
        </label>
        <textarea
          name="email-message"
          id=""
          cols={20}
          rows={7}
          className="max-h-72 block px-2 py-2 w-full border border-secondary  rounded-md focus:outline-none focus:border-2 "
          required
        >
        </textarea>{" "}
        <input
          type="submit"
          className="cursor-pointer inline-block w-fit px-4 py-2 border border-secondary  rounded-md active:border-2 "
          value={formTranslations.sendButton}
        />
      </form>
    </>
  );
};

export default EmailForm;
