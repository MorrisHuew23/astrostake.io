import { motion, AnimatePresence } from 'framer-motion';

export default function RegModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Модальное окно */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
          >
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl pointer-events-auto relative mx-2">
              {/* Кнопка закрытия */}
              <motion.button
                onClick={onClose}
                className="absolute -top-12 -right-2 text-white hover:text-gray-200 focus:outline-none"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                aria-label="Close"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Содержимое модального окна */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="p-6 sm:p-8"
              >
                {/* Заголовок */}
                <motion.div 
                  className="text-center"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <img
                    alt="Coinbase"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-white">
                    Sign in to your account
                  </h2>
                </motion.div>

                {/* Форма */}
                <motion.form 
                  className="mt-6 space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Поле Email */}
                  <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email address
                    </label>
                    <div className="mt-1 border-2 border-amber-50 rounded-lg">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 transition-all"
                      />
                    </div>
                  </motion.div>

                  {/* Поле Password */}
                  <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-purple-500 hover:text-purple-400">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-1 border-2 border-amber-50 rounded-lg">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 transition-all"
                      />
                    </div>
                  </motion.div>

                  {/* Кнопка Submit */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign in
                    </motion.button>
                  </motion.div>
                </motion.form>

                {/* Ссылка внизу */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center text-sm"
                >
                  <p className="text-gray-200/50">
                    Not a member?{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Regisrtation
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}