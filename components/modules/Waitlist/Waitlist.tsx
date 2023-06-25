import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import axios from "axios";
import Modal from "@/components/elements/Modal";
import { WaitListType, WaitListData } from "./type";

export function WaitList({ handleModalClose }: WaitListType) {
  const FormDataSchema = object().shape({
    fullName: string().required("Full name is required"),
    email: string()
      .email("Email address is invalid")
      .required("Email is required"),
  });
  const initialState = {
    fullName: "",
    email: "",
  };
  const onFormSubmit = ({ fullName, email }: WaitListData) => {
    console.log({ fullName, email });
    axios
      .post("/api/waitlist", {
        fullName,
        email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Modal heading="Join #CMFest23 Waitlist" onModalClose={handleModalClose}>
        <Formik
          initialValues={initialState}
          validationSchema={FormDataSchema}
          onSubmit={(values) => {
            onFormSubmit(values);
          }}
        >
          {({ errors, touched, validateField, values }) => (
            <Form>
              <div className="w-full mt-4">
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name
                </label>
                <Field
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  className={`bg-transparent  block w-full text-primary border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-violet-600 focus:bg-white ${
                    errors.fullName && touched.fullName
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
              </div>
              <div className="w-full mt-4">
                <label htmlFor="name" className="block text-sm mb-2">
                  Email Address
                </label>
                <Field
                  type="text"
                  placeholder="Email"
                  name="email"
                  className={`bg-transparent  block w-full text-primary border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-violet-600 focus:bg-white ${
                    errors.email && touched.email
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
              </div>
              <div className="mt-6">
                <button
                  className="bg-primary text-white px-14 py-4 rounded-full text-sm font-medium"
                  type="submit"
                >
                  Join WaitList
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}
