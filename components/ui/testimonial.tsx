export function Testimonial({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="p-6 bg-white dark:bg-muted rounded-lg shadow-md border border-gray-200 dark:border-muted-foreground">
      <p className="text-lg italic text-muted-foreground dark:text-gray-300">"{quote}"</p>
      <div className="mt-4">
        <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-muted-foreground dark:text-gray-400">{role}</p>
      </div>
    </div>
  )
}