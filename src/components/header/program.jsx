// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { cn } from "@/lib/utils"

// // Define the category data structure
// type Topic = {
//   title: string
//   image: string
// }

// type Category = {
//   name: string
//   topics: string[]
//   cards: Topic[]
// }

// export function EnhancedPlatform() {
//   const [activeCategory, setActiveCategory] = useState("Math")

//   // Define all categories and their topics
//   const categories: Record<string, Category> = {
//     Math: {
//       name: "Sof matematika",
//       topics: [
//         "Algebra",
//         "Geometry",
//         "Solving Equations",
//         "Real World Algebra",
//         "Graph Theory",
//         "Probability",
//         "Linear Algebra",
//         "Calculus",
//       ],
//       cards: [
//         { title: "Math Concepts", image: "/images/math-concepts.png" },
//         { title: "Data Charts", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Geometry Tools", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Classroom Learning", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Function Graphs", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Probability Dice", image: "/placeholder.svg?height=200&width=200" },
//         { title: "AI Learning", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Computer Science", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Sports Math", image: "/placeholder.svg?height=200&width=200" },
//       ],
//     },
//     "CS & Programming": {
//       name: "Kompyuter Fanlari",
//       topics: [
//         "Thinking in Code",
//         "Programming with Python",
//         "Programming with Variables",
//         "Computer Science",
//         "Neural Networks",
//         "How LLMs Work",
//         "How Technology Works",
//         "Search Engines",
//       ],
//       cards: [
//         { title: "Brain and Code", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Python", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Coding", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Data Visualization", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Network Graphs", image: "/placeholder.svg?height=200&width=200" },
//         { title: "AI Brain", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Robot Learning", image: "/images/programming.png" },
//         { title: "Network Connections", image: "/placeholder.svg?height=200&width=200" },
//         { title: "SEO Optimization", image: "/placeholder.svg?height=200&width=200" },
//       ],
//     },
//     "Data Analysis": {
//       name: "Data Analysis",
//       topics: [
//         "Exploring Data Visually",
//         "Introduction to Probability",
//         "Predicting with Probability",
//         "Regression and Classification",
//         "Casino Probability",
//       ],
//       cards: [
//         { title: "Pie Chart", image: "/images/pie-chart.png" },
//         { title: "Data Analysis", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Search Data", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Scatter Plot", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Team Analysis", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Probability Games", image: "/placeholder.svg?height=200&width=200" },
//       ],
//     },
//     Science: {
//       name: "Science",
//       topics: [
//         "Scientific Thinking",
//         "Physics of the Everyday",
//         "Quantum Mechanics",
//         "Special Relativity",
//         "Quantum Computing",
//         "Beyond The Nutshell",
//       ],
//       cards: [
//         { title: "Brain Science", image: "/images/brain-science.png" },
//         { title: "Atom Structure", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Quantum Physics", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Wormhole", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Atom Model", image: "/placeholder.svg?height=200&width=200" },
//         { title: "Neuroscience", image: "/placeholder.svg?height=200&width=200" },
//       ],
//     },
//   }

//   return (
//     <div className="min-h-screen bg-[#2D2F36] text-white">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-center mb-8">AL-Jabr o'z ichiga oladi.</h1>

//         {/* Navigation Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-[#F5F5F7] rounded-full p-1 inline-flex">
//             {Object.keys(categories).map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={cn(
//                   "px-6 py-2 rounded-full text-sm font-medium transition-colors",
//                   activeCategory === category ? "bg-white text-black" : "text-gray-600 hover:text-gray-800",
//                 )}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="w-full md:w-64 shrink-0">
//             <h2 className="text-xl font-bold mb-4">{categories[activeCategory].name}</h2>
//             <ul className="space-y-4">
//               {categories[activeCategory].topics.map((topic) => (
//                 <li key={topic} className="hover:text-blue-400 cursor-pointer">
//                   {topic}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Card Grid */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {categories[activeCategory].cards.map((card, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <div className="p-4 flex items-center justify-center h-48 bg-white">
//                     <Image
//                       src={card.image || "/placeholder.svg"}
//                       alt={card.title}
//                       width={150}
//                       height={150}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

