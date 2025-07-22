import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Complete Microblading Aftercare Guide",
      excerpt:
        "Everything your clients need to know about caring for their new microbladed brows during the healing process.",
      category: "Aftercare",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      title: "Choosing the Right PMU Pigments: A Comprehensive Guide",
      excerpt:
        "Learn how to select the perfect pigments for different skin tones and undertones to achieve natural-looking results.",
      category: "Techniques",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Building Your PMU Business: Marketing Strategies That Work",
      excerpt:
        "Proven marketing techniques to attract clients and build a successful permanent makeup business from scratch.",
      category: "Business",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Common Microblading Mistakes and How to Avoid Them",
      excerpt:
        "Learn from common errors that new PMU artists make and discover professional techniques to ensure perfect results.",
      category: "Education",
      date: "February 22, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Lip Blush vs. Traditional Lip Tattoos: What's the Difference?",
      excerpt:
        "Understanding the key differences between modern lip blush techniques and traditional permanent lip makeup.",
      category: "Techniques",
      date: "February 15, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Setting Up Your PMU Studio: Essential Equipment Guide",
      excerpt:
        "A complete guide to setting up your permanent makeup studio with all the essential tools and equipment you need.",
      category: "Business",
      date: "February 8, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  const categories = ["All", "Techniques", "Aftercare", "Business", "Education"]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PMU <span className="text-pink-400">Resources</span> & Blog
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, techniques, and business advice to help you succeed in the permanent makeup industry.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:border-pink-400 hover:text-pink-400 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>

          <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>

                <Button className="bg-pink-400 hover:bg-pink-500 text-white w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-pink-400 hover:text-pink-500 p-0">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with <span className="text-pink-400">PMU Tips</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest techniques, business tips, and industry insights delivered to your inbox monthly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none"
            />
            <Button className="bg-pink-400 hover:bg-pink-500 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
