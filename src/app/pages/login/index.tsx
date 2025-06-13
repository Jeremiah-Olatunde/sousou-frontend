import { ClickableStone } from "../../../components/clickables";
import {
  FieldEmail,
  FieldPassword,
  Form,
  FormCols1,
  FormContainer,
  FormHeader,
  FormRedirect,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../../../components/navbar";

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
            <FormCols1>
              <FieldEmail />
              <FieldPassword />
              <FormSubmit text="login" />
            </FormCols1>
          </Form>

          <div className="h-4" />

          <FormRedirect
            href="/register"
            prompt="don't have an account?"
            text="sign up"
          />
        </FormContainer>
      </FormSection>
    </section>
  );
}
