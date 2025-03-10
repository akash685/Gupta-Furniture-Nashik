export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 animate-spin"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-t-4 border-primary animate-spin"></div>
      </div>
    </div>
  );
}
