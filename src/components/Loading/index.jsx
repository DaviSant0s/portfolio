export default function Loading({ className = '' }) {
  return (
    <span
      aria-hidden='true'
      className={`inline-block size-[23px] animate-spin rounded-full border-[3.5px] border-white border-b-transparent ${className}`.trim()}
    />
  )
}
