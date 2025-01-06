import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_sk51fu4",
          "template_n02wng5",
          formData,
          "6b8uAZTUmtNCeJXEq"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => setIsSending(false));
    }
  };

  return (
    <motion.div
      className="p-4 lg:w-3/4"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Toaster />
      {/* Animated Title */}
      <motion.h2
        className="my-8 text-center text-4xl font-semibold tracking-tighter"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Let's Connect
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <div className="mb-4 flex space-x-4">
          {/* Name Input */}
          <motion.div
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-rose-800">{errors.name}</p>
            )}
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-rose-800">{errors.email}</p>
            )}
          </motion.div>
        </div>

        {/* Message Textarea */}
        <motion.div
          className="mb-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
          />
          {errors.message && (
            <p className="text-sm text-rose-800">{errors.message}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
          whileHover={{ scale: isSending ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? (
              <motion.span
                className="loading"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                🔄
              </motion.span>
            ) : (
              "Send"
            )}
            <FiSend />
          </div>
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
