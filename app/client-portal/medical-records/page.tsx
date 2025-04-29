import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, PawPrintIcon as Paw, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const records = [
  {
    id: "R001",
    pet: "Max",
    petType: "Golden Retriever",
    date: "April 15, 2023",
    type: "Annual Checkup",
    veterinarian: "Dr. Johnson",
    summary: "Healthy overall. Weight: 65 lbs. All vaccinations up to date.",
    files: ["Max_Checkup_Report_04152023.pdf", "Max_Bloodwork_04152023.pdf"],
  },
  {
    id: "R002",
    pet: "Bella",
    petType: "Siamese",
    date: "April 10, 2023",
    type: "Vaccination",
    veterinarian: "Dr. Wilson",
    summary: "Received annual vaccinations. Weight: 10 lbs. No issues noted.",
    files: ["Bella_Vaccination_Record_04102023.pdf"],
  },
  {
    id: "R003",
    pet: "Max",
    petType: "Golden Retriever",
    date: "March 22, 2023",
    type: "Dental Cleaning",
    veterinarian: "Dr. Martinez",
    summary: "Dental cleaning performed. Minor tartar buildup removed. No cavities found.",
    files: ["Max_Dental_Report_03222023.pdf", "Max_Dental_Xrays_03222023.pdf"],
  },
  {
    id: "R004",
    pet: "Max",
    petType: "Golden Retriever",
    date: "January 5, 2023",
    type: "Skin Issue",
    veterinarian: "Dr. Johnson",
    summary: "Mild skin irritation on left paw. Prescribed medicated shampoo and anti-inflammatory.",
    files: ["Max_Treatment_Plan_01052023.pdf"],
  },
  {
    id: "R005",
    pet: "Bella",
    petType: "Siamese",
    date: "December 12, 2022",
    type: "Annual Checkup",
    veterinarian: "Dr. Martinez",
    summary: "Healthy overall. Weight: 9.5 lbs. All vaccinations up to date.",
    files: ["Bella_Checkup_Report_12122022.pdf", "Bella_Bloodwork_12122022.pdf"],
  },
]

export default function MedicalRecordsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Medical Records</h1>
        <p className="text-muted-foreground">View and download your pets' medical records</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search records..." className="w-full sm:w-[300px] pl-8" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by pet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pets</SelectItem>
              <SelectItem value="max">Max</SelectItem>
              <SelectItem value="bella">Bella</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Record type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="checkup">Checkup</SelectItem>
              <SelectItem value="vaccination">Vaccination</SelectItem>
              <SelectItem value="dental">Dental</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="max">Max</TabsTrigger>
          <TabsTrigger value="bella">Bella</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {records.map((record) => (
              <Card key={record.id} className="animate-transition">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between">
                      <div className="flex gap-4 items-start">
                        <div className="rounded-full p-2 bg-primary/10 mt-1">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{record.type}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{record.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Paw className="h-3 w-3 text-primary" />
                            <span className="font-medium">{record.pet}</span>
                            <span className="text-sm text-muted-foreground">({record.petType})</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{record.veterinarian}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-1">Summary</h4>
                      <p className="text-sm text-muted-foreground">{record.summary}</p>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-1">Files</h4>
                      <div className="flex flex-wrap gap-2">
                        {record.files.map((file, index) => (
                          <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md">
                            <FileText className="h-3 w-3 text-primary" />
                            <span>{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="max" className="space-y-4">
          <div className="grid gap-4">
            {records
              .filter((record) => record.pet === "Max")
              .map((record) => (
                <Card key={record.id} className="animate-transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between">
                        <div className="flex gap-4 items-start">
                          <div className="rounded-full p-2 bg-primary/10 mt-1">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{record.type}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{record.date}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Paw className="h-3 w-3 text-primary" />
                              <span className="font-medium">{record.pet}</span>
                              <span className="text-sm text-muted-foreground">({record.petType})</span>
                            </div>
                            <div className="text-sm text-muted-foreground">{record.veterinarian}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Summary</h4>
                        <p className="text-sm text-muted-foreground">{record.summary}</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Files</h4>
                        <div className="flex flex-wrap gap-2">
                          {record.files.map((file, index) => (
                            <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md">
                              <FileText className="h-3 w-3 text-primary" />
                              <span>{file}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="bella" className="space-y-4">
          <div className="grid gap-4">
            {records
              .filter((record) => record.pet === "Bella")
              .map((record) => (
                <Card key={record.id} className="animate-transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between">
                        <div className="flex gap-4 items-start">
                          <div className="rounded-full p-2 bg-primary/10 mt-1">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{record.type}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{record.date}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Paw className="h-3 w-3 text-primary" />
                              <span className="font-medium">{record.pet}</span>
                              <span className="text-sm text-muted-foreground">({record.petType})</span>
                            </div>
                            <div className="text-sm text-muted-foreground">{record.veterinarian}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Summary</h4>
                        <p className="text-sm text-muted-foreground">{record.summary}</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-1">Files</h4>
                        <div className="flex flex-wrap gap-2">
                          {record.files.map((file, index) => (
                            <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md">
                              <FileText className="h-3 w-3 text-primary" />
                              <span>{file}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
