import { Loader } from "lucide-react";

export function FormSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="grow flex justify-center items-center">
      {children}
    </section>
  );
}

export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-120 border border-stone-200 rounded-xl relative p-8">
      {children}
    </div>
  );
}

export function FormLoading() {
  return (
    <div className="h-full w-full rounded-xl bg-white/25 backdrop-blur-[2px] absolute top-0 left-0 z-10 flex justify-center items-center">
      <Loader className="animate-spin size-8 text-stone-400" />
    </div>
  );
}

export function FormHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex flex-col gap-4">
      {children}
      <div className="border-b border-stone-200" />
    </header>
  );
}

export function FormTitle({ text }: { text: string }) {
  return (
    <h1 className="font-inter font-semibold text-xl text-center">{text}</h1>
  );
}

export function Form({ children }: { children: React.ReactNode }) {
  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(event) => event.preventDefault()}
    >
      {children}
    </form>
  );
}

export function FormRedirect({
  href,
  prompt,
  text,
}: { href: string; prompt: string; text: string }) {
  return (
    <div className="font-inter font-medium tracking-tight capitalize text-center text-sm">
      <span className="">{prompt} </span>
      <a href={href}>
        <span className="underline">{text}</span>
      </a>
    </div>
  );
}

export function FormSubmit({ text }: { text: string }) {
  return (
    <input
      type="submit"
      value={text}
      className="cursor-pointer font-inter text-white bg-black rounded-md text-sm tracking-tight py-4 px-6 capitalize"
    />
  );
}

export function FieldName() {
  return (
    <FormField
      name="fullName"
      label="enter full name"
      placeholder="Full Name (e.g William Wordsworth)"
    />
  );
}

export function FieldEmail() {
  return (
    <FormField
      name="email"
      label="enter email address"
      placeholder="Email (mail@domain.com)"
    />
  );
}

export function FieldChoosePassword() {
  return (
    <FormField
      name="password"
      label="choose password"
      placeholder="Enter Password"
    />
  );
}

export function FieldPassword() {
  return (
    <FormField
      name="password"
      label="enter password"
      placeholder="Enter Password"
    >
      <a href="#">
        <span className="font-inter font-semibold tracking-tight text-sm capitalize">
          forgot password?
        </span>
      </a>
    </FormField>
  );
}

export function FieldVerificationCode() {
  return (
    <FormField
      name="verification-code"
      label="enter verification code"
      placeholder="e.g VDH9873"
    />
  );
}

export function FieldTermsOfService() {
  return (
    <div className="flex gap-2">
      <input name="tos" id="tos" type="checkbox" />
      <label
        htmlFor="tos"
        className="font-inter font-light tracking-tight text-sm"
      >
        <span>I agree to the </span>
        <a href="#">
          <span className="capitalize underline">terms of service</span>
        </a>
        <span> and </span>
        <a href="#">
          <span className="capitalize underline">privacy policy</span>
        </a>
        .
      </label>
    </div>
  );
}

function FormField({
  children,
  label,
  name,
  placeholder,
}: {
  children?: React.ReactNode;
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FormLabel htmlFor={name} text={label}>
        {children}
      </FormLabel>
      <FormInput placeholder={placeholder} name={name} id={name} />
    </div>
  );
}

function FormLabel({
  htmlFor,
  text,
  children,
}: { htmlFor: string; text: string; children?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={htmlFor} className="font-inter text-sm capitalize">
        {text}
      </label>
      {children}
    </div>
  );
}

function FormInput({
  name,
  placeholder,
  id,
}: { name: string; id: string; placeholder: string }) {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      className="bg-stone-50 border border-stone-200 rounded-md font-inter text-sm p-4 text-stone-500 focus:outline-stone-300 focus:outline-2"
    />
  );
}
