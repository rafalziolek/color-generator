export default function Canvas({ children }) {
  return (
    <div className="col-span-9 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-full h-full bg-grid">
      {children}
    </div>
  );
}
