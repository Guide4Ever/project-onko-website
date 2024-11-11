"use client";

import { useCallback, useState } from "react";
import { postEntry } from "../../action";
import TextBox from "./TextBox";
import DownloadTOSButton from "./DownloadTOSButton";
import { useEdgeStore } from "@/lib/edgestore";
// import { SingleImageDropzone } from "./SingleImageDropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ONKO_LOGO_URL_SMALL } from "@/app/constants";
import { lazy, Suspense } from "react";

const Datepicker = lazy(() =>
  import("flowbite-react").then((module) => ({ default: module.Datepicker }))
);
const SingleImageDropzone = lazy(() =>
  import("./SingleImageDropzone").then((module) => ({
    default: module.SingleImageDropzone,
  }))
);

// Named export for Form component
export function Form() {
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const { edgestore } = useEdgeStore();
  const [isTOSChecked, setIsTOSChecked] = useState(false);

  const calculateAge = useCallback((birthday: Date | null) => {
    if (!birthday) return 0;
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }, []);

  // Function to handle the form submission
  const handleSubmit = async () => {
    if (file && text && isTOSChecked && firstName && lastName) {
      try {
        // 1. Image upload
        const res = await edgestore.myPublicImages.upload({
          file,
          input: { type: "post" }
        });

        // 2. Database save
        const formData = new FormData();
        formData.append("entry", text);
        formData.append("imageUrl", res.url);
        await postEntry(formData);

        // 3. Send email
        await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify({
            logoUrl: ONKO_LOGO_URL_SMALL,
            imageUrl: res.url,
            firstName: firstName,
            lastName: lastName,
            age: calculateAge(birthDate),
            content: text,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Reset the form
        setText("");
        setFile(undefined);
        setIsTOSChecked(false);
        setFirstName("");
        setLastName("");
        setBirthDate(new Date());

        // Show success notification
        toast.success("Zgodba uspešno odposlana!", {
          position: "top-center", // Position using string
          autoClose: 5000,
        });
      } catch (error) {
        console.error("Napaka pri nalaganju slike:", error);
        
        // Show error notification
        toast.error("Napaka pri nalaganju zgodbe. Poskusite znova.", {
          position: "top-center", // Position using string
          autoClose: 5000,
        });
      }
    } else {
      // Show error notification for invalid submission
      toast.warn(
        "Za uspešno odposlano zgodbo je potrebno dodati opis zgodbe, sliko in sprejeti pogoje uporabe.",
        {
          position: "top-center", // Position using string
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <div>
      {/* Toast container for notifications */}
      <Suspense fallback={<div>Loading Notifications...</div>}>
        <ToastContainer />
      </Suspense>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="col-span-1">
          <TextBox
            numberOfLines={1}
            text={firstName}
            onChange={(value: string) => setFirstName(value)}
            placeholder="Ime"
          />
        </div>
        <div className="col-span-1">
          <TextBox
            numberOfLines={1}
            text={lastName}
            onChange={(value: string) => setLastName(value)}
            placeholder="Priimek"
          />
        </div>
        <div className="col-span-1 w-auto">
          <Datepicker
            language="sl"
            value={birthDate}
            onChange={(date) => setBirthDate(date)}
            placeholder="Datum rojstva"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 space-x-2">
        <TextBox
          numberOfLines={6}
          text={text}
          onChange={(value: string) => setText(value)}
          placeholder="Zaupaj nam svojo zgodbo..."
        />
        <Suspense fallback={<div>Loading Image Dropzone...</div>}>
          <SingleImageDropzone
            width={350}
            height={204}
            value={file}
            className="mt-4 sm:mt-0"
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 1, // 1MB
            }}
            onChange={(file) => {
              setFile(file);
            }}
          />
        </Suspense>
      </div>
      <div className="mt-4 mb-4">
        <DownloadTOSButton />
      </div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="tos"
          required
          checked={isTOSChecked}
          onChange={(e) => setIsTOSChecked(e.target.checked)}
          className="h-4 w-4 text-purple-500 border-neutral-300 rounded"
        />
        <span className="text-neutral-900 dark:text-neutral-100">
          Strinjam se s pogoji uporabe mojih podatkov.
        </span>
      </label>
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md text-gray-800 dark:text-white font-medium focus:outline-none"
          onClick={handleSubmit}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <span className="px-2">Pošlji</span>
        </button>
      </div>
    </div>
  );
}

export default Form;