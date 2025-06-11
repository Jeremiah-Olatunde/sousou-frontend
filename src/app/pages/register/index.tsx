import { useState } from "react";
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
  FieldVerificationCode,
} from "../../../components/form";
import { Navbar } from "../../../components/navbar";

const STEPS = [
  { index: 1, name: "create-account" },
  { index: 2, name: "verify-email" },
  { index: 3, name: "complete" },
] as const;

type Step = (typeof STEPS)[number];

export function Register() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <RegistrationSteps />
    </section>
  );
}

function RegistrationSteps() {
  const [step, setStep] = useState<Step["index"]>(1);

  function increment(current: Step["index"]): Step["index"] {
    return (current + 1) as Step["index"];
  }

  switch (step) {
    case 1:
      return <CreateAccount handleSubmit={() => setStep(increment)} />;
    case 2:
      return <VerifyEmail handleSubmit={() => setStep(increment)} />;
    case 3:
      return <AccountCreated handleSubmit={() => {}} />;
  }
}

function CreateAccount({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <FormSection>
      <FormContainer>
        <FormHeader>
          <FormTitle text="Create an Account" />
          <ClickableStone type="link" href="#" text="sign up with google" />
        </FormHeader>

        <div className="h-8" />

        <Form handleSubmit={handleSubmit}>
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
  );
}

function VerifyEmail({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <FormSection>
      <FormContainer>
        <FormHeader>
          <FormTitle text="Verify Your Email Address" />
          <p className="font-inter tracking-tight text-center text-stone-500">
            Check your inbox and enter the code to continue.
          </p>
        </FormHeader>

        <div className="h-8" />

        <Form handleSubmit={handleSubmit}>
          <FieldVerificationCode />
          <FormSubmit text="verify" />
        </Form>

        <div className="h-4" />

        <FormRedirect
          href="/login"
          prompt="having trouble?"
          text="resend code"
        />
      </FormContainer>
    </FormSection>
  );
}

function AccountCreated({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <FormSection>
      <FormContainer>
        <FormHeader>
          <FormTitle text="Account Created!" />
          <p className="font-inter tracking-tight text-center text-stone-500">
            Congratulations! Your registration was successful.
          </p>
        </FormHeader>

        <div className="h-8" />

        <Form handleSubmit={handleSubmit}>
          <FormSubmit text="go to dashboard" />
        </Form>
      </FormContainer>
    </FormSection>
  );
}
