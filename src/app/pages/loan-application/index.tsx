import {
  FieldSourceTrustMeBro,
  Form,
  FormCols1,
  FormCols2,
  FormContainer,
  FormField,
  FormHeader,
  FormSection,
  FormSubmit,
  FormTitle,
} from "../../../components/form";
import { Navbar } from "../../../components/navbar";

export function LoanApplication() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <FormSection>
        <FormContainer>
          <FormHeader>
            <FormTitle text="Loan Application" />
          </FormHeader>

          <div className="h-8" />

          <Form>
            <FormCols2>
              <FormCols1>
                <FormField name="full-name" placeholder="Full Name" />
                <div className="grid grid-cols-2 gap-4">
                  <FormField name="birth-date" placeholder="Date Of Birth" />
                  <FormField name="gender" placeholder="Gender" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="marital-status"
                    placeholder="Marital Status"
                  />
                  <FormField name="telephone" placeholder="Telephone" />
                </div>
                <FormField name="address" placeholder="Address" />
              </FormCols1>

              <FormCols1>
                <FormField
                  name="bank-verification-number"
                  placeholder="Bank Verification Number (BVN)"
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="employment-status"
                    placeholder="Employment Status"
                  />
                  <FormField name="employer-name" placeholder="Employer Name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="occupation"
                    placeholder="Occupation/Job Title"
                  />
                  <FormField
                    name="salary"
                    placeholder="Monthly Salary/Income"
                  />
                </div>
                <FormField
                  name="education-level"
                  placeholder="Highest Level Of Education"
                />
              </FormCols1>
            </FormCols2>
            <FieldSourceTrustMeBro />
            <FormSubmit text="apply now" />
          </Form>

          <div className="h-4" />
        </FormContainer>
      </FormSection>
    </section>
  );
}
