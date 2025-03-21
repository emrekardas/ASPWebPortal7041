export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <span className="mt-4 text-lg font-medium text-gray-700">Yükleniyor...</span>
    </div>
  );
}
