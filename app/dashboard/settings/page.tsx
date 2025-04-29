import { SettingsDialog } from "@/components/settings-dialog"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">Manage your account settings and preferences</p>

      <div className="mt-4">
        <SettingsDialog />
      </div>
    </div>
  )
}
