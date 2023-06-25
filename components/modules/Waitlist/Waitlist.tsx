import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import axios from "axios";
import Modal from "@/components/elements/Modal";
import { WaitListType, WaitListData } from "./type";
import { useState } from "react";
import Loader from "@/components/elements/Loader";

export function WaitList({ handleModalClose }: WaitListType) {
  const FormDataSchema = object().shape({
    fullName: string().required(" is required"),
    email: string().email(" is invalid").required(" is required"),
  });
  const initialState = {
    fullName: "",
    email: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const onFormSubmit = ({ fullName, email }: WaitListData) => {
    setIsLoading(true);
    axios
      .post("/api/waitlist", {
        fullName,
        email,
      })
      .then((res) => {
        setIsLoading(false);
        setSuccess("Congratulations! We've added you to the waitlist");
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Oops! An error occurred please try again");
      });
  };
  return (
    <div>
      <Modal heading="Join #CMFest23 Waitlist" onModalClose={handleModalClose}>
        <Formik
          initialValues={initialState}
          validationSchema={FormDataSchema}
          onSubmit={(values, { resetForm }) => {
            onFormSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="w-full mt-4">
                {success && (
                  <div className="bg-green-100 text-green-700 p-2 text-sm my-2 rounded-lg">
                    {success}
                  </div>
                )}
                {error && !success && (
                  <div className="bg-red-100 text-red-700 p-2 text-sm my-2 rounded-lg">
                    {error}
                  </div>
                )}
                <label
                  htmlFor="fullName"
                  className={`block text-sm mb-2 ${
                    errors.fullName && touched.fullName
                      ? "text-red-400"
                      : "text-primary"
                  }`}
                >
                  Full Name <ErrorMessage name="fullName" />
                </label>

                <Field
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  className={`bg-transparent  block w-full text-primary border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-violet-600 focus:bg-white ${
                    errors.fullName && touched.fullName
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="name"
                  className={`block text-sm mb-2 ${
                    errors.email && touched.email
                      ? "text-red-400"
                      : "text-primary"
                  }`}
                >
                  Email Address <ErrorMessage name="email" />
                </label>
                <Field
                  type="text"
                  placeholder="Email"
                  name="email"
                  className={`bg-transparent  block w-full text-primary border rounded-lg  py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-violet-600 focus:bg-white ${
                    errors.email && touched.email
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
              </div>
              <div className="mt-6">
                <button
                  className="bg-primary text-white text-sm px-6 py-3 rounded-full  disabled:opacity-75 font-medium flex items-center"
                  type="submit"
                  disabled={isLoading}
                >
                  Join WaitList{" "}
                  {isLoading && (
                    <span className="ml-2">
                      <Loader />
                    </span>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}
