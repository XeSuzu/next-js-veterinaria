import Image from "next/image"

export function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        className="rounded-full shadow-lg"
        width={120}
        height={120}
      />
      <h4 className="mt-4 text-lg font-bold">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  )
}