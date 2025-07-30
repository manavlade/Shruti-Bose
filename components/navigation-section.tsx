"use client"

export function NavigationSection() {
  const navItems = [
    {
      name: "Courses",
      href: "#courses",
      description: "Comprehensive PMU training programs to launch your beauty career",
      icon: "🎓",
    },
    {
      name: "Services",
      href: "#services",
      description: "Professional PMU treatments for natural, beautiful results",
      icon: "✨",
    },
    {
      name: "Masterclasses",
      href: "",
      description: "Live, hands-on PMU sessions in select cities",
      icon: "👨‍🎓"
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-nude-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-taupe-800 mb-4">
            Explore Our <span className="text-blush-500">World</span>
          </h2>
          <p className="text-taupe-600 max-w-2xl mx-auto">
            Discover our comprehensive training programs and premium PMU services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group bg-gradient-to-br from-nude-50 to-sand-50 hover:from-blush-50 hover:to-nude-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-nude-200 hover:border-blush-200 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-taupe-800 mb-3 group-hover:text-blush-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-taupe-600 leading-relaxed">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
