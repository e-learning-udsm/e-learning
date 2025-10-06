import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, ExternalLink, BookOpen, Users, Calendar, Search } from "lucide-react";
import { useState } from "react";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const publications = [
    {
      title: "AI-Enhanced Adaptive Learning: A Framework for Tanzanian Higher Education",
      authors: ["Mwanga, S.", "Mwalimu, E.", "Kimario, J."],
      journal: "International Journal of Educational Technology",
      year: "2024",
      type: "Journal Article",
      doi: "10.1016/j.ijet.2024.001",
      abstract: "This study presents a novel framework for implementing AI-enhanced adaptive learning systems in resource-constrained educational environments, specifically designed for Tanzanian universities.",
      keywords: ["AI in Education", "Adaptive Learning", "Higher Education", "Tanzania"]
    },
    {
      title: "Digital Literacy Training for Rural Teachers: Lessons from Tanzania",
      authors: ["Kimario, J.", "Hassan, A.", "Shayo, G."],
      journal: "Computers & Education",
      year: "2024",
      type: "Journal Article", 
      doi: "10.1016/j.compedu.2024.002",
      abstract: "Analysis of a comprehensive digital literacy program for rural educators, including impact assessment and sustainability recommendations.",
      keywords: ["Teacher Training", "Digital Literacy", "Rural Education", "Professional Development"]
    },
    {
      title: "Open Educational Resources in Kiswahili: Development and Impact Assessment",
      authors: ["Hassan, A.", "Ally, F.", "Mwalimu, E."],
      journal: "Educational Technology Research and Development",
      year: "2023",
      type: "Journal Article",
      doi: "10.1007/s11423-023-001",
      abstract: "Comprehensive study on the development, localization, and impact of open educational resources in Kiswahili for East African learners.",
      keywords: ["Open Educational Resources", "Localization", "Kiswahili", "Impact Assessment"]
    },
    {
      title: "Mobile Learning for Agricultural Extension: A Pilot Study in Dodoma Region",
      authors: ["Mtega, P.", "Mushi, D.", "Kimario, J."],
      journal: "International Journal of Mobile Learning",
      year: "2023",
      type: "Journal Article",
      doi: "10.1504/IJMLO.2023.001",
      abstract: "Evaluation of mobile learning technologies for delivering agricultural education to farmers in rural Tanzania.",
      keywords: ["Mobile Learning", "Agricultural Extension", "Rural Development", "ICT4D"]
    },
    {
      title: "COVID-19 and Emergency Digital Learning in Tanzania: Challenges and Opportunities",
      authors: ["Mwalimu, E.", "Kimario, J.", "Mwanga, S.", "Hassan, A."],
      journal: "Educational Technology & Society",
      year: "2022",
      type: "Journal Article",
      doi: "10.30191/ETS.202201",
      abstract: "Analysis of rapid digital learning deployment during COVID-19 pandemic, including lessons learned and recommendations for future preparedness.",
      keywords: ["Emergency Remote Teaching", "COVID-19", "Digital Divide", "Educational Resilience"]
    },
    {
      title: "Blended Learning Framework for Tanzanian Universities: A Design-Based Research Approach",
      authors: ["Mwanga, S.", "Mwalimu, E."],
      conference: "Proceedings of ICBL 2024",
      year: "2024",
      type: "Conference Paper",
      abstract: "Presentation of a contextually appropriate blended learning framework developed through design-based research methodology.",
      keywords: ["Blended Learning", "Design-Based Research", "Higher Education", "Framework Development"]
    },
    {
      title: "Teacher Educators' Perspectives on Digital Pedagogy Integration in Tanzania",
      authors: ["Shayo, G.", "Kimario, J.", "Mtega, P."],
      conference: "EDULEARN24 Proceedings",
      year: "2024",
      type: "Conference Paper",
      abstract: "Qualitative study exploring teacher educators' experiences and challenges in integrating digital pedagogical approaches.",
      keywords: ["Teacher Education", "Digital Pedagogy", "Qualitative Research", "Professional Development"]
    }
  ];

  const resources = [
    {
      title: "Digital Learning Toolkit for African Universities",
      description: "Comprehensive guide and resources for implementing digital learning in African higher education contexts.",
      type: "Toolkit",
      year: "2024",
      downloadable: true
    },
    {
      title: "Open Courseware: Introduction to Educational Technology (Kiswahili)",
      description: "Complete course materials for educational technology course delivered in Kiswahili.",
      type: "Course Materials",
      year: "2023",
      downloadable: true
    },
    {
      title: "Teacher Digital Competency Assessment Framework",
      description: "Validated instrument for assessing digital competencies among East African educators.",
      type: "Assessment Tool",
      year: "2023", 
      downloadable: true
    },
    {
      title: "Mobile Learning App Development Guidelines",
      description: "Technical guidelines for developing mobile learning applications for low-resource environments.",
      type: "Technical Guide",
      year: "2022",
      downloadable: true
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === "all" || pub.year === selectedYear;
    const matchesType = selectedType === "all" || pub.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  const years = [...new Set(publications.map(pub => pub.year))].sort().reverse();
  const types = [...new Set(publications.map(pub => pub.type))];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Publications & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research publications, open educational resources, and tools developed by our team 
            to advance digital learning innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 p-6 gradient-card rounded-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {filteredPublications.length} publications found
          </div>
        </div>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Research Publications
          </h2>
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="shadow-card hover:shadow-academic transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight mb-2">{pub.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {pub.authors.join(", ")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {pub.year}
                        </div>
                      </div>
                    </div>
                    <Badge variant="default" className="shadow-academic">
                      {pub.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {pub.abstract}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2 text-sm">Keywords:</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="secondary">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Published in:</span> {pub.journal || pub.conference}
                      </p>
                      <div className="flex gap-2">
                        {pub.doi && (
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            DOI: {pub.doi}
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="gradient-card rounded-xl p-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
            <Download className="w-8 h-8 text-primary" />
            Open Educational Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{resource.year}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full shadow-academic">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;