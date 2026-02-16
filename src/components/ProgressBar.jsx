const ProgressBar = ({ label, value }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default ProgressBar;
