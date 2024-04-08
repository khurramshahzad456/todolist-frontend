import useTodos from '../hooks/useTodos';

const Home = () => {
  const { todos, loading, updateTodo, deleteTodo } = useTodos();

  if (loading) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-primary-600 mr-2 inline-block' />
      </div>
    );
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='max-w-4xl mx-auto py-10'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>
          Your Tasks
        </h2>
        {todos.map((todo, index) => (
          <div
            className='flex items-center justify-between bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4 transition-all hover:shadow-lg'
            key={todo._id || index}
          >
            <div>
              <p
                className={`text-lg font-semibold ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-800 dark:text-gray-100'
                }`}
              >
                {todo.title}
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                {todo.description}
              </p>
            </div>
            <div className='flex items-center'>
              <button
                className='flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 transition-colors disabled:bg-green-300'
                onClick={() => updateTodo({ ...todo, completed: true })}
                disabled={todo.completed}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Complete
              </button>
              <button
                className='flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors'
                onClick={() => deleteTodo(todo._id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
