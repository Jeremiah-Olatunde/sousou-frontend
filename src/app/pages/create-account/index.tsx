import { ClickableStone } from "../../../components/clickables";
import {
  FieldEmail,
  FieldName,
  FieldChoosePassword,
  FieldTermsOfService,
  Form,
  FormContainer,
  FormHeader,
  FormRedirect,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../../../components/navbar";

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
            <FieldChoosePassword />
            <FieldTermsOfService />

            <FormSubmit text="create account" />
          </Form>

          <div className="h-4" />

          <FormRedirect
            href="/login"
            prompt="already have an account?"
            text="login"
          />
        </FormContainer>
      </FormSection>
    </section>
  );
}
