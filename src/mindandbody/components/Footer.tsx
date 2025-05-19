


export const Footer=() => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span
          className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025 {' '}
          <a
            href="https://www.linkedin.com/in/johan-danilo-garz%C3%B3n-forero-djs20220304/"
            target='_blank'
            className="hover:underline">
              MindAndBody™
            </a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/MindAndBodyUsb/MindAndBody" target='_blank' className="flex items-center gap-1 me-4 md:me-6">
              <i className="fa-brands fa-github text-xl"></i>
              Repository
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}