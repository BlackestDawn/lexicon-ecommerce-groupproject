export default function Contact() {
  return (
    <div
      className="flex min-h-screen items-center justify-start bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/contact-image.png')", 
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

      <div className="bg-gray-100 rounded-2xl relative z-10 mx-auto w-full max-w-lg px-16 py-20">
        <h1 className="text-4xl font-medium text-gray-900">Contact us</h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-10"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label className=" absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                Your name
              </label>
            </div>

            {/* Email input field */}
            <div className="relative z-0">
              <input
                type="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                Your email
              </label>
            </div>

            {/* Message textarea field */}
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                Your message
              </label>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
