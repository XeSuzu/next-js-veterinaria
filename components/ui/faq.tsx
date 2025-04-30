export function FAQ({ question, answer }: { question: string; answer: string }) {
    return (
      <div className="p-6 bg-white dark:bg-muted rounded-lg shadow-md border dark:border-muted-foreground">
        <h4 className="font-bold">{question}</h4>
        <p className="mt-2 text-muted-foreground">{answer}</p>
      </div>
    )
  }