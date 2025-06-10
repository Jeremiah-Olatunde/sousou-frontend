import { ClickableStone } from "../../../components/clickables";
import {
  FieldEmail,
  FieldName,
  FieldPassword,
  FieldTermsOfService,
  Form,
  FormContainer,
  FormHeader,
  FormRedirect,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../home/navbar";

export function CreateAccount() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <FormSection>
        <FormContainer>
          <FormHeader>
            <FormTitle text="Create an Account" />
            <ClickableStone type="link" href="#" text="sign up with google" />
          </FormHeader>

          <div className="h-8" />

          <Form>
            <FieldName />
            <FieldEmail />
            <FieldPassword />
            <FieldTermsOfService />

            <FormSubmit text="create account" />
          </Form>

          <div className="h-4" />

          <FormRedirect
            href="#"
            prompt="already have an account?"
            text="login"
          />
        </FormContainer>
      </FormSection>
    </section>
  );
}
