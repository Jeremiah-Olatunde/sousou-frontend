import { ClickableStone } from "../../../components/clickables";
import {
  FieldEmail,
  FieldPassword,
  Form,
  FormContainer,
  FormHeader,
  FormRedirect,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../home/navbar";

export function Login() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <FormSection>
        <FormContainer>
          <FormHeader>
            <FormTitle text="Welcome Back!" />
            <ClickableStone type="link" href="#" text="continue with google" />
          </FormHeader>

          <div className="h-8" />

          <Form>
            <FieldEmail />
            <FieldPassword />

            <FormSubmit text="login" />
          </Form>

          <div className="h-4" />

          <FormRedirect
            href="/create-account"
            prompt="don't have an account?"
            text="sign up"
          />
        </FormContainer>
      </FormSection>
    </section>
  );
}
