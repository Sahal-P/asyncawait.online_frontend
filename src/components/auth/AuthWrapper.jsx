
const AuthWrapper = ({children, type}) => {
  return (
    <section className="bg-secondary">
        <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Async Await
          </a>
          <div className="w-full bg-primary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {type}
              </h1>
              {children}
              </div>
          </div>
        </div>
      </section>
  )
}

export default AuthWrapper
