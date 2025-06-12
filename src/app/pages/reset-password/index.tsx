import {
  FieldEmail,
  Form,
  FormContainer,
  FormHeader,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../../../components/navbar";

export function ResetPassword() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <FormSection>
        <FormContainer>
          <FormHeader>
            <FormTitle text="Reset Your Password" />
            <p className="font-inter tracking-tight text-center text-stone-500">
              Enter your email and receive a password reset link.
            </p>
          </FormHeader>

          <div className="h-8" />

          <Form>
            <FieldEmail />

            <FormSubmit text="request password reset" />
          </Form>

          <div className="h-4" />
        </FormContainer>
      </FormSection>
    </section>
  );
}
