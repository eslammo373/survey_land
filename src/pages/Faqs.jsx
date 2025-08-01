import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { formTypes } from "../utils/data";
import { ThemeContext } from "@/context/ThemeContext";

const Faqs = () => {
  const { theme } = useContext(ThemeContext);


  return (


    <section className=" pb-12 dark:bg-secondaryDark" >
      <div className="max-w-[1050px] mx-auto p-6 min-h-screen">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl   mb-4 mt-12">
            Frequently Asked <span className="text-main">Questions</span>
          </h1>
          <p className=" mb-24 text-grayDark">
            Browse our FAQ to troubleshoot issues, learn best practices, or get step-by-step
            instructions.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          {/* What is SurveyLand */}
          <div
            className={`bg-white dark:bg-dark rounded-lg p-6 ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            }   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              What is SurveyLand ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              SurveyLand is a powerful online application that allows anyone to quickly create
              custom online forms. Its intuitive drag-and-drop user interface makes form building
              incredibly simple, and doesn't require you to write a single line of code. Using
              JotForm, you can create and publish forms, integrate them into your site, and receive
              responses by email.
            </p>
          </div>

          {/* What can I do with SurveyLand */}
          <div
            className={`p-6 pb-10 max-w-5xl mx-auto bg-white dark:bg-dark ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } rounded-lg  mb-8 transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-bold text-accent mb-2">
              What can I do with SurveyLand ?
            </h2>
            <p className="dark:text-gray-300 mb-6">
              SurveyLand enables you to create online forms, collect responses directly in your
              email, and create fillable PDF forms. You can put together all types of forms,
              including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {formTypes.map((form, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 bg-accent-light bg-clone  text-main px-3 py-1 rounded-md shadow-lg hover:bg-accent-hover transition"
                >
                  <span className="bg-main w-5 h-5 rounded-full text-white flex items-center justify-center">
                    <IoIosArrowForward className="text-xs text-[13px] dark:text-dark text-bold" />
                  </span>
                  <span className="text-sm font-medium text-white dark:text-dark">{form}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Why SurveyLand */}
          <div
            className={`bg-white dark:bg-dark ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } rounded-lg p-6  transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">Why SurveyLand?</h2>
            <p className="dark:text-gray-300 leading-relaxed">
              SurveyLand will have your forms up and running in seconds! We're the easiest form
              builder with the most advanced capabilities, including the industry's top design and
              customization tools. Don't know where to start? We have thousands of ready-made
              templates to get your form rockin'. Need your forms to show different questions based
              on your customers answers? Our conditions tool can show or hide whatever form fields
              you choose, depending on how people answer previous questions. SurveyLand also lets
              you add your company logo, custom color schemes, and stunning background images.
            </p>
          </div>

          {/* Coding experience question */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              Do I need coding experience to create a form ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              Not at all! WithSurveyLand's drag-and-drop builder, you don't need any coding
              experience to create the perfect form for your needs. Advanced users can go directly
              into the HTML code and make adjustments, but it's absolutely not necessary. With our
              Theme Designer, you can change the style of your form with just a few clicks.
            </p>
          </div>

          {/* Is SurveyLand free */}
          <div
            className={`bg-white dark:bg-dark rounded-lg p-6 ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            }   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              Is SurveyLand free ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              SurveyLand has multiple subscription options, including a free plan. Free users have
              access to all of the same features as paid users, but with lower limits on form
              counts, form submissions, form views, upload space and submission storage. To check
              out the different options,{" "}
              <span className="text-accent font-medium">visit our Pricing page</span>.
            </p>
          </div>

          {/* How to add forms to website */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              How do I add SurveyLand forms to my website ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              When you publish your online form, you'll have the option to use it as a standalone
              link, or to embed it directly into your website. Embedding simply requires you to copy
              and paste the embed code we provide.
            </p>
          </div>

          {/* How secure is my data */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              How secure is my data with SurveyLand ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              SurveyLand takes the security of your data very seriously. All SurveyLand standalone
              form links and embed codes are secure (SSL) by default, and we give all users the
              option to encrypt their data. SurveyLand also adheres to strict European data
              protection laws by allowing users to store their data on secure German servers if they
              choose.
            </p>
          </div>

          {/* Data downgrade question */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6  transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              What happens to my data when I downgrade my account ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed">
              If you decide to downgrade your account, your data will still be securely stored like
              it always has been and as long as it does not go over the total submission storage on
              free accounts which is 100MB. Also, your forms will be disabled if you go over the
              monthly submission limit on your downgraded plan or any other limit, such as the
              number of forms. You can check your submission and data storage levels by clicking on
              the account icon on the top right of your page when logged in and reviewing the
              progress bars.
            </p>
          </div>

          {/* How does SurveyLand work */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6   transition-colors duration-300`}
          >
            <h2 className="text-xl text-main font-semibold text-accent mb-3">
              How does SurveyLand work ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed mb-4">
              SurveyLand is a powerful online form builder with an intuitive, no-code interface —
              perfect for those looking for an easy way to create and customize forms. Create your
              own forms from scratch or pick from 10,000+ different ready-made templates. Use our
              drag-and-drop builder to craft the perfect form for your needs. Integrate with helpful
              tools and widgets, change fonts and colors, upload branding assets and images, and so
              much more. When you're done, share your form via email, link, QR code, or by embedding
              it in your website or social media platforms.
            </p>
            <p className="dark:text-gray-300 leading-relaxed mb-4">
              SurveyLand also offers an entire suite of handy tools that can help you make the most
              of your data. Browse our tools to learn how to collect e-signatures, generate PDFs,
              share form reports and charts, create your own online store, and so much more.
            </p>
            <p className="dark:text-gray-300 leading-relaxed">
              To get started, simply sign up for one of our plans — ranging from our free Starter
              plan to a variety of paid plans.
            </p>
          </div>

          {/* What can I use SurveyLand for */}
          <div
            className={`bg-white dark:bg-dark rounded-lg ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
                : "shadow-[0_-1px_10px_rgba(0,0,0,0.2)]"
            } p-6   transition-colors duration-300`}
          >
            <h2 className="text-xl  text-main font-semibold text-accent mb-3">
              What can I use SurveyLand for ?
            </h2>
            <p className="dark:text-gray-300 leading-relaxed mb-4">
              SurveyLand is an all-in-one platform that helps people and organizations collect and
              manage data. You can use SurveyLand's drag-and-drop interface to create customized
              forms and surveys that are tailored to your unique needs — without any coding
              knowledge. Use SurveyLand to make collecting information a seamless experience,
              whether you're gathering customer feedback, processing payments securely, or
              registering event attendees.
            </p>
            <p className="dark:text-gray-300 leading-relaxed">
              SurveyLand also offers an entire suite of tools to streamline data management.
              Organize form data in{" "}
              <span className="text-accent font-medium">SurveyLand Tables</span>, manage responses
              in <span className="text-accent font-medium">SurveyLand Inbox</span>, and create
              fillable PDF forms in{" "}
              <span className="text-accent font-medium">SurveyLand's PDF Editor</span>. It also
              offers more advanced data management tools, like{" "}
              <span className="text-accent font-medium">SurveyLand Workflows</span> to automate
              workflows, <span className="text-accent font-medium">SurveyLand Report Builder</span>{" "}
              for detailed analytics, and{" "}
              <span className="text-accent font-medium">SurveyLand Sign</span> to securely collect
              e-signatures. SurveyLand is a versatile and comprehensive tool that lets you
              efficiently collect, manage, and analyze data, all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
