import { Star, Shield, Clock, Users, TrendingUp } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

interface Medication {
  id: number
  name: string
  company: string
  logo: string
  rating: number
  score: string
  ratingText: string
  features: string[]
  offer?: string
  badge?: string
  buttonText: string
  trustpilot?: {
    score: string
    reviews: string
    quote: string
  }
}

const medications: Medication[] = [
  {
    id: 1,
    name: "Ozempic",
    company: "WeightWise",
    logo: "💊",
    rating: 5,
    score: "9.9",
    ratingText: "Excellent",
    features: [
      "Get medication like Ozempic, Semaglutide & Tirzepatide",
      "Get approved with a quick 2 minute quiz",
      "No insurance needed"
    ],
    offer: "Limited Offer $120 Off Your First Month!",
    badge: "BEST VALUE OVERALL",
    buttonText: "Visit Website",
    trustpilot: {
      score: "20,000+",
      reviews: "bestmedplan.com",
      quote: "People have found the right medication plan for their needs."
    }
  },
  {
    id: 2,
    name: "Wegovy",
    company: "LoseHealth",
    logo: "🔬",
    rating: 5,
    score: "9.7",
    ratingText: "Great",
    features: [
      "Access to GLP-1 like Semaglutide & Tirzepatide",
      "Quick 3 minute approval process",
      "Expert made meal plans"
    ],
    offer: "Lose Up To 1.5% Body Weight Weekly",
    buttonText: "Visit Website"
  },
  {
    id: 3,
    name: "Semaglutide",
    company: "Sprout",
    logo: "🌱",
    rating: 4.5,
    score: "9.3",
    ratingText: "Great",
    features: [
      "Specialized in GLP-1 Semaglutide",
      "Everything included with every plan",
      "Lose 15 - 25% of body weight in 12 months"
    ],
    offer: "$50 Off First Month. Fast Shipping Nationwide",
    buttonText: "Visit Site"
  },
  {
    id: 4,
    name: "Tirzepatide",
    company: "Prime Health",
    logo: "⚕️",
    rating: 4,
    score: "8.9",
    ratingText: "Good",
    features: [
      "Get compound GLP-1 like Semaglutide & Tirzepatide",
      "Quick 2 minute approval process",
      "180 day weight loss guarantee"
    ],
    offer: "No Waitlist. No Insurance Needed",
    buttonText: "Visit Site"
  },
  {
    id: 5,
    name: "Mounjaro",
    company: "SHED",
    logo: "🏥",
    rating: 4,
    score: "8.8",
    ratingText: "Good",
    features: [
      "Get weight loss medication like Ozempic & Wegovy",
      "1 on 1 health coaching available",
      "Custom Semaglutide & Tirzepatide Plans"
    ],
    offer: "1 on 1 Health Coaching. Personalized Plans",
    buttonText: "Visit Site"
  }
]

function App() {

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold">🩺 GLP1.Cc</h1>
              <div className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-blue-200 transition-colors">HOME</a>
                <a href="#" className="text-blue-200 border-b-2 border-blue-200 pb-1">WEIGHT LOSS</a>
                <a href="#" className="hover:text-blue-200 transition-colors">DIABETES</a>
                <a href="#" className="hover:text-blue-200 transition-colors">FAQ</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Medication Plan
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Weight Loss Injections 2025
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We rank the top Telehealth platforms providing weight loss medication like Ozempic and 
            Mounjaro. The telehealth companies listed also provide custom Semaglutide and 
            Tirzepatide plans.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* Main Content (70%) */}
          <div className="lg:col-span-7">
            {/* Medication Cards */}
            <div className="space-y-4">
              {medications.map((med, index) => (
                <Card key={med.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {med.badge && (
                    <div className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold text-center">
                      {med.badge}
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Left: Rank and Company */}
                      <div className="flex items-center gap-4 md:w-1/4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-3xl">{med.logo}</div>
                          <div>
                            <h3 className="font-semibold text-base">{med.company}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-1 md:w-1/2">
                        {med.offer && (
                          <div className="text-blue-600 font-semibold mb-2 text-sm">
                            {med.offer}
                          </div>
                        )}
                        <ul className="space-y-1.5">
                          {med.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-xs leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Rating and Action */}
                      <div className="md:w-1/4 text-center md:text-right flex flex-col justify-between items-center md:items-end">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                           <div className="text-3xl font-bold text-blue-600">
                            {med.score}
                          </div>
                          <div>
                             <div className="text-xs text-gray-600">
                              {med.ratingText}
                            </div>
                            <div className="flex justify-center md:justify-end gap-1">
                              {renderStars(med.rating)}
                            </div>
                          </div>
                        </div>
                        <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full md:w-auto text-sm">
                          {med.buttonText}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:col-span-3 space-y-8">
             {/* Trustpilot Review Card */}
            {medications[0].trustpilot && (
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                   <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="font-bold text-lg">{medications[0].trustpilot.score}</span>
                    <span className="text-blue-600 font-semibold">bestmedplan.com</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {medications[0].trustpilot.quote}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Our Top Pick Section */}
            <div className="sticky top-8">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
                OUR TOP PICK
              </h2>
              <Card className="overflow-hidden shadow-xl border-2 border-blue-600">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-5xl mb-3">💊</div>
                    <h3 className="text-lg font-bold">WeightWise</h3>
                    <div className="text-4xl font-bold text-blue-600 my-2">9.9</div>
                    <div className="text-gray-600 text-sm mb-2">Excellent</div>
                    <div className="flex justify-center gap-1 mb-4">
                      {renderStars(5)}
                    </div>
                    <div className="text-blue-600 font-semibold mb-3 text-sm">
                      Limited Offer $120 Off First Month
                    </div>
                    <ul className="space-y-2 mb-4 text-xs text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Get medication Ozempic, Semaglutide & Tirzepatide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Save up to 40% for all doses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>Quick 2 minute approval process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>No Membership/Evaluation Fees. Pay for medication only</span>
                      </li>
                    </ul>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-base w-full">
                      Visit Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Information Section (Full Width Below) */}
          <section className="mt-12 lg:col-span-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              The Ultimate Guide to GLP-1 Weight Loss Injections
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-lg prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                GLP-1 or glucagon-like peptide-1 is a hormone your gut produces in response to food. This 
                hormone signals your brain that you're full, slows down how fast your stomach empties, and 
                boosts insulin production — all of which are incredibly useful for people struggling with obesity 
                or type 2 diabetes. Scientists figured out how to mimic this hormone in medication form, 
                creating drugs that extend these effects over a longer period of time. That's where Ozempic, 
                Wegovy, and Mounjaro come from.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Ozempic and Wegovy are two medications containing the same active ingredient: semaglutide. 
                Ozempic was originally approved for managing type 2 diabetes, but people quickly noticed it 
                came with a "side effect" — weight loss. This led to the launch of Wegovy, which contains a 
                higher dose of semaglutide specifically for weight loss. Mounjaro is another medication offering 
                tirzepatide, which not only mimics GLP-1 but also another hormone called GIP. This dual-action 
                approach appears to make it even more effective for both blood sugar regulation and weight 
                loss.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>Average weight loss of 15-22% of body weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>FDA approved for weight management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Weekly injections for convenience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Proven effective in clinical trials</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🩺 GLP1.Cc</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for GLP-1 weight loss medication comparisons
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-300">WEIGHT LOSS</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App