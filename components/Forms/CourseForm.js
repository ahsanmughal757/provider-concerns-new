import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Form, Field, FormikProvider, ErrorMessage, useFormik } from "formik";
import Swal from "sweetalert2";
import TextInputLiveFeedback from "./TextInputLiveFeedback";
import TextAreaLiveFeedback from "./TextAreaLiveFeedback";

const CourseForm = () => {
  // Phone Number Validation
  const phoneRegExp =
    /^\+?((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Must be less  than 20 characters")
      .required("Name is required")
      // .matches(/^[a-zA-Z0-9]+$/, "Alpha Numeric characters only allowed"),
      .matches(/^[a-zA-Z0-9\s]+$/, "Alpha Numeric characters only allowed"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is invalid")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values) => {

    console.log("values: ", values);
    // alert(JSON.stringify(values));
    Swal.showLoading();

    // Consultation Request Email
    await axios
      .post(`/api/take-course`, {
        name: values.name,
        subject: values.subject,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })

      .then((res) => {
        if (
          res?.data?.message === "EMAIL_SEND_ERROR" ||
          res?.data?.message === "Error_proccessing_charge"
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          return;
        }

        Swal.fire({
          title: "Done",
          text: "Request Submitted Successfully!",
          icon: "success",
        });

        formik.resetForm();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <>
      <div id="course-form" className="blog-details-form pb-100">
        <div className="blog-details-form-wrap">
          <h2 className="mb-3">Fill out this Form</h2>
          <h4 className="text-secondary fs-6 mb-4 fw-medium">
            Leave us a message
          </h4>

          <FormikProvider value={formik}>
            <Form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <TextInputLiveFeedback
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <TextInputLiveFeedback
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <TextInputLiveFeedback
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <TextInputLiveFeedback
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <TextAreaLiveFeedback
                    type="textarea"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    name="message"
                    rows="4"
                  />
                </div>
              </div>

              <div className="text-left">
                <button type="submit" className="btn btn-common">
                  Submit
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default CourseForm;
