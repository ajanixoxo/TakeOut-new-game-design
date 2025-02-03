import { motion } from "framer-motion"

const NavigationPaths = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  }

  return (
    <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <motion.path
        d="M0,0 C200,100 300,0 500,100 C700,0 800,100 1000,0"
        stroke="#edc639"
        strokeWidth="2"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  )
}

export default NavigationPaths

