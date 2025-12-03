"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import "./Contact.css";


const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Name must contain only letters")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Full name is required"),
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  company: Yup.string()
    .max(50, "Company name cannot exceed 50 characters")
    .required("Company name is required"),
});


async function submitContactForm(values, resetForm) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast.success("Submitted Successfully!");
      resetForm();
    } else {
      toast.error("Submission Failed");
    }
  } catch (err) {
    toast.error("Network Error");
  }
}

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  return (
    <div className="contact-section" id="contact">
      <Toaster position="top-center" />

      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Let’s Talk</h2>

          <p className="contact-subtext">
            Reach out to us with your queries, suggestions and applications.
            We’d be happy to explore the next growth opportunity!
          </p>

          <p className="contact-address">
            <Image
              src="/images/property-location.png"
              alt="location icon"
              className="address-img"
              width={10}
              height={10}
            />
            <span>
              4074 Ebert Summit Suite 375 <br />
              Lake Leonardchester
            </span>
          </p>
        </div>
        <div className="contact-right">
          <div className="contact-card">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => submitContactForm(values, resetForm)}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormField name="name" placeholder="Full Name*" />
                  <FormField name="email" placeholder="Email*" />
                  <FormField name="phone" placeholder="Phone Number*" />
                  <FormField name="company" placeholder="Company Name*" maxLength={50} />

                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="message"
                      rows="1"
                      className="input-field textarea"
                      placeholder="Message"
                      maxLength={500}
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Submit →"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ name, placeholder, maxLength }) {
  return (
    <div className="form-group">
      <Field name={name} className="input-field" placeholder={placeholder} maxLength={maxLength} />
      <ErrorMessage name={name} component="div" className="error-text" />
    </div>
  );
}
