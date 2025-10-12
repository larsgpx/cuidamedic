"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext(null)

const useCarousel = () => {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel component")
  }
  return context
}

const Carousel = React.forwardRef(({ className, itemsPerView: initialItemsPerView, totalItems: initialTotalItems, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [itemsPerView, setItemsPerView] = React.useState(initialItemsPerView || 1)
  const [totalItems, setTotalItems] = React.useState(initialTotalItems || 0)

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerView
      return nextIndex >= totalItems ? 0 : nextIndex
    })
  }, [itemsPerView, totalItems])

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - itemsPerView
      return prevIndex < 0 ? Math.max(0, totalItems - itemsPerView) : prevIndex
    })
  }, [itemsPerView, totalItems])

  const goToSlide = React.useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  // Sincronizar valores iniciales
  React.useEffect(() => {
    if (initialItemsPerView !== undefined) {
      setItemsPerView(initialItemsPerView)
    }
  }, [initialItemsPerView])

  React.useEffect(() => {
    if (initialTotalItems !== undefined) {
      setTotalItems(initialTotalItems)
    }
  }, [initialTotalItems])

  const value = React.useMemo(() => ({
    currentIndex,
    itemsPerView,
    totalItems,
    setItemsPerView,
    setTotalItems,
    goToNext,
    goToPrevious,
    goToSlide,
    initialItemsPerView
  }), [currentIndex, itemsPerView, totalItems, goToNext, goToPrevious, goToSlide, initialItemsPerView])

  return (
    <CarouselContext.Provider value={value}>
      <div ref={ref} className={cn("relative", className)} {...props} />
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { currentIndex, itemsPerView, setTotalItems, setItemsPerView, initialItemsPerView } = useCarousel()
  const contentRef = React.useRef(null)
  const childrenArray = React.Children.toArray(children)

  React.useEffect(() => {
    setTotalItems(childrenArray.length)
    
    // Solo detectar automáticamente si no se pasó itemsPerView como prop
    if (initialItemsPerView === undefined) {
      const detectItemsPerView = () => {
        if (contentRef.current) {
          const firstItem = contentRef.current.querySelector('.carousel-item')
          if (firstItem) {
            const containerWidth = contentRef.current.offsetWidth
            const itemWidth = firstItem.offsetWidth
            
            // Si el item tiene width definido, usar eso
            if (itemWidth > 0) {
              const calculatedItemsPerView = Math.floor(containerWidth / itemWidth)
              setItemsPerView(Math.max(1, calculatedItemsPerView))
            } else {
              // Fallback: detectar por clases CSS
              const hasMdBasis = firstItem.classList.contains('md:basis-1/3')
              const hasLgBasis = firstItem.classList.contains('lg:basis-1/4')
              const hasXlBasis = firstItem.classList.contains('xl:basis-1/5')
              
              if (hasXlBasis) {
                setItemsPerView(window.innerWidth >= 1280 ? 5 : window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1)
              } else if (hasLgBasis) {
                setItemsPerView(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1)
              } else if (hasMdBasis) {
                setItemsPerView(window.innerWidth >= 768 ? 3 : 1)
              } else {
                setItemsPerView(1)
              }
            }
          }
        }
      }

      // Ejecutar después de que el DOM se actualice
      const timeoutId = setTimeout(detectItemsPerView, 100)
      window.addEventListener('resize', detectItemsPerView)
      
      return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('resize', detectItemsPerView)
      }
    }
  }, [childrenArray.length, setTotalItems, setItemsPerView, initialItemsPerView])

  // Calcular translateX de forma segura
  const translateX = React.useMemo(() => {
    if (!itemsPerView || itemsPerView <= 0) return 0
    return -(currentIndex * (100 / itemsPerView))
  }, [currentIndex, itemsPerView])

  return (
    <div 
      ref={contentRef}
      className={cn("flex overflow-hidden transition-transform duration-300 ease-in-out", className)}
      style={{ transform: `translateX(${translateX}%)` }}
      {...props}
    >
      {children}
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("carousel-item min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { goToPrevious, currentIndex } = useCarousel()
  
  return (
    <button
      ref={ref}
      onClick={goToPrevious}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-5 w-5 text-gray-600" />
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { goToNext } = useCarousel()
  
  return (
    <button
      ref={ref}
      onClick={goToNext}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-5 w-5 text-gray-600" />
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
