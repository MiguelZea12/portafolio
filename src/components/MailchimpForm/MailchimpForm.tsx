import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "../Newsletter/Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }: {
          subscribe: (formData: Record<string, any>) => void;
          status: string;
          message: string;
        }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData: Record<string, any>) => subscribe(formData)}
          />
        )}
        />
    </>
  )
}
