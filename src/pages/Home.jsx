import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Brain, HardHat, MessageSquare, Factory, ChevronRight, ChevronLeft,
  Quote, Wrench, Lightbulb, Package, BatteryCharging, Users, Phone, Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Import pages and components
import AnimatedCounter from './AnimatedCounter';
import { areas } from './Areas';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import extraImg1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../images/fuel.jpeg';
import extraImg4 from '../images/battary.jpeg';
import extraImg5 from '../images/images (3).jpeg';
import logologo from '../images/logologo.png';
import towImage from '../images/tow.png';
import towImage2 from '../images/tow-2.png';
import towImage3 from '../images/tow-3.png';

// Import car brand images
import toyota from "../images/cars/toyota.jpeg";
import Volkswagen from "../images/cars/Volkswagen.jpeg";
import volvo from "../images/cars/volvo.jpeg";
import audi from "../images/cars/audi.jpeg";
import bmw from "../images/cars/bmw.jpeg";
import byd from "../images/cars/byd.jpeg";
import Chevrolet from "../images/cars/Chevrolet.jpeg";
import Hyundai from "../images/cars/Hyundai.jpeg";
import jeep from "../images/cars/jeep.jpeg";
import kia from "../images/cars/kia.jpeg";
import mazda from "../images/cars/mazda.jpeg";
import mercedes from "../images/cars/mercedes.jpeg";
import minicooper from "../images/cars/minicooper.jpeg";
import Nissan from "../images/cars/Nissan.jpeg";
import Peugeot from "../images/cars/Peugeot.jpeg";
import skoda from "../images/cars/skoda.jpeg";
import subaru from "../images/cars/subaru.jpeg";

// Import WhatsApp images
import whatsapp1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import whatsapp2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import whatsapp3 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_0b194e2d.jpg';
import whatsapp4 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_bc1bb19d.jpg';
import whatsapp6 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_00a9c303.jpg';
import whatsapp7 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_a2d1fc1d.jpg';
import whatsapp8 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_d02e6e11.jpg';
import whatsapp9 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_0da1e2e8.jpg';
import whatsapp10 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_58370244.jpg';
import whatsapp11 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_d875b30c.jpg';

// Data constants
const whatsappImages = [
  whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp6,
  whatsapp7, whatsapp8, whatsapp9, whatsapp10, whatsapp11
];

const partners = [
  { src: toyota, alt: "Toyota" },
  { src: Volkswagen, alt: "Volkswagen" },
  { src: volvo, alt: "Volvo" },
  { src: audi, alt: "Audi" },
  { src: bmw, alt: "BMW" },
  { src: byd, alt: "BYD" },
  { src: Chevrolet, alt: "Chevrolet" },
  { src: Hyundai, alt: "Hyundai" },
  { src: jeep, alt: "Jeep" },
  { src: kia, alt: "Kia" },
  { src: mazda, alt: "Mazda" },
  { src: mercedes, alt: "Mercedes" },
  { src: minicooper, alt: "Mini Cooper" },
  { src: Nissan, alt: "Nissan" },
  { src: Peugeot, alt: "Peugeot" },
  { src: skoda, alt: "Skoda" },
  { src: subaru, alt: "Subaru" },
];

const extraServices = [
  {
    id: 'rescue',
    icon: <Wrench size={44} color="#ffc107" style={{ marginBottom: '1rem' }} />,
    title: 'إنقاذ السيارات',
    desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
  },
  {
    id: 'equipment',
    icon: <Lightbulb size={44} color="#ffc107" style={{ marginBottom: '1rem' }} />,
    title: 'نقل المعدات',
    desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
  },
  {
    id: 'fuel',
    icon: <Package size={44} color="#ffc107" style={{ marginBottom: '1rem' }} />,
    title: 'التزود بالوقود',
    desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبيات جاهز لتزويدكم بالوقود ..',
  },
  {
    id: 'battery',
    icon: <BatteryCharging size={44} color="#ffc107" style={{ marginBottom: '1rem' }} />,
    title: 'وصلة بطارية',
    desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبيات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
  },
  {
    id: 'tires',
    icon: <Users size={44} color="#ffc107" style={{ marginBottom: '1rem' }} />,
    title: 'تغيير الاطارات',
    desc: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..',
  },
];

// Main Home Component
const Home = () => {
  // State management
  const [areaPage, setAreaPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Hero image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  // Constants
  const cardsPerPage = 5;
  const totalPages = Math.ceil(areas.length / cardsPerPage);
  const startIdx = areaPage * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const visibleAreas = areas.slice(startIdx, endIdx);
  const winchImg = require('../images/images.png');

  // Hero images array
  const heroImages = [towImage, towImage2];

  // Memoized values for better performance
  const paginationData = useMemo(() => ({
    currentPage: areaPage,
    totalPages,
    visibleAreas,
    isAnimating,
    totalAreasCount: areas.length,
    visibleAreasCount: visibleAreas.length
  }), [areaPage, totalPages, visibleAreas, isAnimating, areas.length]);

  // Optimized animation handler with useCallback
  const handlePageChange = useCallback((newPage) => {
    if (newPage < 0 || newPage >= totalPages || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setAreaPage(newPage);
      setIsAnimating(false);
    }, 300);
  }, [totalPages, isAnimating]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handlePageChange(areaPage + 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          handlePageChange(areaPage - 1);
          break;
        case 'Home':
          e.preventDefault();
          handlePageChange(0);
          break;
        case 'End':
          e.preventDefault();
          handlePageChange(totalPages - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [areaPage, totalPages, handlePageChange]);

  // Hero image carousel timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsImageTransitioning(false);
      }, 300); // Half of the transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Phone number for easy access
  const phoneNumber = '01044844492';

  return (
    <>
      {/* Styles */}
      <style>
        {`
          /* Marquee Styles */
          .marquee-container {
            background: #f5f5f5;
            padding: 2rem 0;
            overflow: hidden;
            margin: 0;
          }

          .marquee-track {
            display: flex;
            animation: marquee1 20s linear infinite;
            gap: 2rem;
            transform: translateX(-100%)
          }

          .marquee-item {
            min-width: 200px;
            height: 150px;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            flex-shrink: 0;
          }

          .marquee-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @keyframes marquee1 {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(150%); }
            100% { transform: translateX(-100%); }
          }

          /* Counter Section Responsive */
          @media (max-width: 768px) {
            .counter-section {
              flex-direction: column !important;
              align-items: stretch !important;
              max-width: 90% !important;
              margin: auto !important;
            }
            .counter-section .counter-item {
              border-left: none !important;
              border-bottom: 1px solid #f7e600 !important;
              padding: 1.2rem 0 !important;
              margin: 0 !important;
            }
            .counter-section .counter-item:last-child {
              border-bottom: none !important;
            }
          }

          /* Improved Areas Section Styles */
          .areas-fade {
            transition: opacity 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
          }
          .areas-fade.out {
            opacity: 0.1;
            transform: scale(0.98);
          }
          .areas-fade.in {
            opacity: 1;
            transform: scale(1);
          }
          .big-area-card:hover {
            transform: scale(1.025);
            box-shadow: 0 12px 36px #00336655, 0 4px 24px #0002;
          }
          .areas-section-grid {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 2rem;
            align-items: stretch;
            margin-bottom: 1.5rem;
          }
          .areas-small-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1.2rem;
            height: 100%;
            order: 1;
          }
          .areas-big-card {
            height: 100%;
            display: flex;
            align-items: stretch;
            order: 2;
          }
          
          /* Enhanced Pagination Controls */
          .pagination-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .pagination-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .pagination-btn {
            background: linear-gradient(135deg, #0a3977 0%, #1976d2 100%);
            color: #fff;
            border: none;
            border-radius: 0.8rem;
            padding: 0.8rem 1.8rem;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(10, 55, 119, 0.3);
            position: relative;
            overflow: hidden;
            min-width: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }

          .pagination-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .pagination-btn:hover:not(:disabled) {
            background: linear-gradient(135deg, #0a2c61 0%, #1565c0 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(10, 55, 119, 0.4);
          }

          .pagination-btn:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(10, 55, 119, 0.3);
          }

          .pagination-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .pagination-btn:hover::before {
            left: 100%;
          }

          /* Page Indicators */
          .page-indicators {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-top: 1rem;
          }

          .page-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #e0e0e0;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .page-dot.active {
            background: #1976d2;
            transform: scale(1.2);
            box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);
          }

          .page-dot:hover:not(.active) {
            background: #bdbdbd;
            transform: scale(1.1);
          }

          /* Page Info */
          .page-info {
            color: #666;
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 0.5rem;
            text-align: center;
          }

          /* Loading State */
          .areas-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            color: #666;
            font-size: 1.1rem;
          }

          .loading-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #e0e0e0;
            border-top: 2px solid #1976d2;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 0.5rem;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            .areas-section-grid {
              grid-template-columns: 1fr;
              grid-template-rows: auto auto;
            }
            .areas-big-card {
              order: 1;
              margin-bottom: 1.2rem;
            }
            .areas-small-cards {
              order: 2;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              gap: 1rem;
            }
            
            .pagination-controls {
              gap: 0.8rem;
            }
            
            .pagination-btn {
              padding: 0.7rem 1.4rem;
              font-size: 0.9rem;
              min-width: 100px;
            }
            
            .page-indicators {
              gap: 0.4rem;
            }
            
            .page-dot {
              width: 10px;
              height: 10px;
            }
          }

          @media (max-width: 480px) {
            .pagination-controls {
              flex-direction: column;
              gap: 0.6rem;
            }
            
            .pagination-btn {
              width: 100%;
              max-width: 200px;
            }
          }

          /* Area Card Responsive Styles */
          .area-card-large {
            min-height: 260px;
          }
          
          .area-card-small {
            min-height: 220px;
          }
          
          .area-card-content-large {
            padding: 2.2rem 2.2rem 2.2rem 1.2rem;
          }
          
          .area-card-content-small {
            padding: 1.2rem 1.2rem 1.2rem 0.7rem;
          }
          
          .area-card-title-large {
            font-size: 2.2rem;
          }
          
          .area-card-title-small {
            font-size: 1.25rem;
          }
          
          .area-card-description {
            font-size: 1.15rem;
            line-height: 1.7;
            max-width: 90%;
            padding-right: 40px;
          }
          
          .area-card-service-badge {
            font-size: 1.1rem;
            padding: 0.5rem 1.5rem;
            margin-bottom: 1.2rem;
          }
          
          .area-card-button {
            font-size: 1rem;
            padding: 0.5rem 1.2rem;
            margin-top: 0.5rem;
          }

          @media (max-width: 768px) {
            .area-card-large {
              min-height: 240px;
            }
            
            .area-card-small {
              min-height: 200px;
            }
            
            .area-card-content-large {
              padding: 1.8rem 1.8rem 1.8rem 1rem;
            }
            
            .area-card-content-small {
              padding: 1rem 1rem 1rem 0.6rem;
            }
            
            .area-card-title-large {
              font-size: 1.8rem;
              padding-right: 20px;
            }
            
            .area-card-title-small {
              font-size: 1.1rem;
              padding-right: 20px;
            }
            
            .area-card-description {
              font-size: 1rem;
              line-height: 1.6;
              max-width: 95%;
              padding-right: 20px;
              margin-bottom: 1rem;
            }
            
            .area-card-service-badge {
              font-size: 1rem;
              padding: 0.4rem 1.2rem;
              margin-bottom: 1rem;
            }
            
            .area-card-button {
              font-size: 0.9rem;
              padding: 0.4rem 1rem;
              margin-top: 0.4rem;
            }
          }

          @media (max-width: 480px) {
            .area-card-large {
              min-height: 220px;
            }
            
            .area-card-small {
              min-height: 180px;
            }
            
            .area-card-content-large {
              padding: 1.5rem 1.5rem 1.5rem 0.8rem;
            }
            
            .area-card-content-small {
              padding: 0.8rem 0.8rem 0.8rem 0.5rem;
            }
            
            .area-card-title-large {
              font-size: 1.5rem;
              padding-right: 15px;
              line-height: 1.1;
            }
            
            .area-card-title-small {
              font-size: 1rem;
              padding-right: 15px;
            }
            
            .area-card-description {
              font-size: 0.9rem;
              line-height: 1.5;
              max-width: 100%;
              padding-right: 15px;
              margin-bottom: 0.8rem;
            }
            
            .area-card-service-badge {
              font-size: 0.9rem;
              padding: 0.3rem 1rem;
              margin-bottom: 0.8rem;
            }
            
            .area-card-button {
              font-size: 0.8rem;
              padding: 0.3rem 0.8rem;
              margin-top: 0.3rem;
            }
          }

          /* Hero Section Styles */
          .hero-section {
            position: relative;
            min-height: 500px;
            background: linear-gradient(135deg, #0064ff 0%, #001247 100%);
            overflow: hidden;
            display: flex;
            align-items: center;
          }

          .hero-diagonal {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, transparent 0%, transparent 40%, white 40%, white 100%);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 3;
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
            min-height: 72vh;
          }

          .hero-text {
            color: #0077ff;
            direction: rtl;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .hero-title .highlight {
            color: #FFA500;
          }

          .hero-description {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
            opacity: 0.9;
            color: #0077ff;
          }

          @media (max-width: 768px) {
            .hero-description {
              color: #fff;
            }
          }

          .hero-offer {
            font-size: 1.5rem;
            font-weight: bold;
            color: #FFA500;
            margin-bottom: 2rem;
          }

          .hero-cta {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .cta-button {
            background: white;
            color: #1E604A;
            border: none;
            border-radius: 8px;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          }

          .hero-phone {
            font-size: 1.3rem;
            font-weight: bold;
            color: white;
            direction: ltr;
          }

          .hero-image {
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image {
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 1rem;
          }

          .hero-image img {
            max-width: 100%;
            height: auto;
            filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3));
            transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
            opacity: 1;
            transform: scale(1);
          }

          .hero-image img.transitioning {
            opacity: 0;
            transform: scale(0.95);
          }

          .hero-image img.fade-in {
            animation: heroImageFadeIn 0.6s ease-in-out;
          }

          @keyframes heroImageFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95) rotate(-2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          .hero-image img.fade-out {
            animation: heroImageFadeOut 0.6s ease-in-out;
          }

          @keyframes heroImageFadeOut {
            0% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: scale(0.95) rotate(2deg);
            }
          }

          /* Hero Image Indicators */
          .hero-image-indicators {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
            z-index: 10;
          }

          .hero-image-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .hero-image-dot:hover {
            background: rgba(255, 255, 255, 0.8);
            transform: scale(1.2);
          }

          .hero-image-dot.active {
            background: #ffe066;
            border-color: #ffe066;
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(255, 224, 102, 0.5);
          }

          @media (max-width: 768px) {
            .hero-content {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 2rem;
            }
            .hero-title {
              font-size: 2.5rem;
            }
            .hero-diagonal {
              background: linear-gradient(135deg, transparent 0%, transparent 60%, white 60%, white 100%);
            }
            .hero-image img {
              max-width: 90%;
              transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
            }
          }

          @media (max-width: 480px) {
            .hero-image img {
              max-width: 85%;
              transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
            .hero-image-indicators {
              bottom: 0.5rem;
              gap: 0.3rem;
            }
            .hero-image-dot {
              width: 10px;
              height: 10px;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-diagonal"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              MOHAMED<span className="highlight"> BAHR</span>
            </h1>
            <p className="hero-description">
              ونش انقاذ محمد بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
            </p>
            <div className="hero-offer">
              خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%
            </div>
            <div className="hero-cta">
              <button className="cta-button" onClick={() => window.location.href = `tel:${phoneNumber}`}>
                اتصل الان
              </button>
              <div className="hero-phone">
                {phoneNumber}
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={heroImages[currentImageIndex]}
              alt={`Tow Truck ${currentImageIndex + 1}`}
              className={`${isImageTransitioning ? 'transitioning' : 'fade-in'}`}
            />
            {/* Image indicators */}
            <div className="hero-image-indicators">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`hero-image-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => {
                    setIsImageTransitioning(true);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                      setIsImageTransitioning(false);
                    }, 500);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Improved Areas Cards Pagination Section */}
      <section className="areas-section">
        <div className="section-container">
          <h2 className="section-title">بعض مناطق التغطية</h2>

          <AreasGrid
            visibleAreas={visibleAreas}
            areaPage={areaPage}
            isAnimating={isAnimating}
            winchImg={winchImg}
          />

          <AreasPagination
            {...paginationData}
            onPageChange={handlePageChange}
          />
        </div>
      </section>

      {/* Service Information Section */}
      <section className="service-info-section">
        <div className="section-container">
          <div className="service-badge">ونش انقاذ سيارات</div>
          <h2 className="service-title">
            مميزات و خدمات ونش انقاذ محمد بحر لأنقاذ و رفع السيارات
          </h2>
          <div className="service-description">
            نقدم جميع خدمات <span className="highlight">سحب و انقاذ السيارات</span>، <span className="highlight">تغيير الاطارات</span>، <span className="highlight">نقل الوقود</span>، <span className="highlight">شحن بطاريات السيارة</span> وغيرها من الخدمات على مدار الساعة وبأسرع وقت وأفضل سعر في مصر.
          </div>
          <ServiceFeaturesList />
          <div className="contact-highlight">
            اتصل الآن: <span className="phone-number">{phoneNumber}</span>
          </div>
          <div className="service-details">
            <span className="highlight">خدمة 24 ساعة</span> | <span className="highlight">أسرع ونش انقاذ سيارات</span> | <span className="highlight">تغطية جميع المناطق</span> | <span className="highlight">أسعار منافسة</span> | <span className="highlight">سحب سيارات، تبديل إطارات، شحن بطارية، تزويد وقود</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          {/* Yellow CTA box */}
          <div className="features-cta">
            <div className="cta-title">ونش انقاذ محمد بحر</div>
            <h3 className="cta-heading">اطلب ونش انقاذ سيارات دلوقتي بكل سهولة.</h3>
            <p className="cta-description">
              ونش انقاذ محمد بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
            </p>
          </div>
          {/* Blue features grid */}
          <div className="features-grid">
            <FeatureCard
              icon={<Brain size={48} color="#ffc107" />}
              title="السرعة"
              description="نصلك في غضون 10 دقائق بحد أقصى، ونقدم خدمة إنقاذ السيارات بسرعة واحترافية عالية."
            />
            <FeatureCard
              icon={<HardHat size={48} color="#ffc107" />}
              title="خدمة 24 ساعة"
              description="الأوناش متاحة طوال اليوم 24 ساعة طوال أيام الأسبوع في أي وقت من اليوم، نهاراً أو ليلاً."
            />
            <FeatureCard
              icon={<MessageSquare size={48} color="#ffc107" />}
              title="الانتشار"
              description="تنتشر جميع سيارات الانقاذ لدينا في جميع أنحاء الجمهورية والميادين العامة والطرق الرئيسية لذلك نحن الأقرب إليك."
            />
            <FeatureCard
              icon={<Factory size={48} color="#ffc107" />}
              title="الخبرة"
              description="يتمتع فريق العمل لدينا بخبرة واسعة إلى جانب معرفة السائقين بالطرق والاختصارات التي تضمن سرعة الوصول."
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-content">
            {/* Large quotation mark icon */}
            <div className="quote-icon">
              <Quote size={90} color="#0077ff" />
            </div>

            {/* Title with underline */}
            <div className="quote-title">
              مميزات ونش انقاذ سيارات
              <span className="highlight-name">
                محمد بحر
                <span className="underline"></span>
              </span>
            </div>

            {/* Quote text box */}
            <div className="quote-text-box">
              إذا كنت تبحث عن خدمة إنقاذ سيارات بأرخص سعر فعليك إختيار خدمة ونش إنقاذ سيارات من خلال الاتصال بنا وسوف نرسل إليك أقرب ونش إنقاذ سيارات علي الفور في أي وقت علي مدار اليوم فنحن نوفر خدماتنا 24 ساعة علي مدار اليوم.
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section">
        <div className="section-container">
          <h2 className="services-main-title">ونش انقاذ سيارات في مصر</h2>
          <p className="services-description">
            نحن نقدم خدمة ونش انقاذ سيارات في جميع أنحاء جمهورية مصر العربية بأعلى جودة وأسرع وقت. فريقنا المدرب على أعلى مستوى جاهز لمساعدتك في أي وقت من اليوم.
          </p>

          <h3 className="services-subtitle">خدماتنا تشمل:</h3>

          <div className="services-list">
            <div className="service-item">
              <span className="service-bullet">•</span>
              إنقاذ السيارات من الحوادث
            </div>
            <div className="service-item">
              <span className="service-bullet">•</span>
              نقل السيارات المعطلة
            </div>
            <div className="service-item">
              <span className="service-bullet">•</span>
              خدمة التزود بالوقود
            </div>
            <div className="service-item">
              <span className="service-bullet">•</span>
              وصلة البطارية
            </div>
            <div className="service-item">
              <span className="service-bullet">•</span>
              تغيير الاطارات
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <CounterItem target={32} prefix="+" label="سنوات من الخبرة" />
        <CounterItem target={98} suffix="%" label="عملاء سعداء" />
        <CounterItem target={13720} label="سيارة تم إنقاذها" />
        <CounterItem target={10} label="عدد اوناش الانقاذ" />
        <CounterItem target={49} label="فريق العمل" />
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">صور من أعمالنا</h2>
          <div className="gallery-grid">
            {whatsappImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`صورة واتساب رقم ${idx + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-container">
          <h2 className="section-title">شركاء النجاح</h2>
          <Slider
            dots={false}
            infinite={true}
            speed={700}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1800}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
              { breakpoint: 600, settings: { slidesToShow: 2 } },
            ]}
          >
            {partners.map((partner, idx) => (
              <div key={idx} className="partner-slide">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="partner-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="extra-services-section">
        <div className="section-container">
          <h2 className="section-title">خدمات إضافية</h2>
          <div className="services-grid">
            {extraServices.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                image={[extraImg1, extraImg2, extraImg3, extraImg4, extraImg5][idx]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">آراء العملاء</h2>
          <div className="testimonials-grid">
            <TestimonialCard
              text="وصلني ونش الإنقاذ بعد 10 دقائق فقط من الاتصال. السائق كان متعاون جداً والخدمة ممتازة."
              author="إبراهيم سعيد - رجل أعمال"
            />
            <TestimonialCard
              text="شركة محترمة وفريق عمل محترف. أنصح الجميع بالتعامل معهم."
              author="خالد اكرم - صاحب شركة"
            />
          </div>
        </div>
      </section>


      {/* Footer Content */}
      <FooterContent phoneNumber={phoneNumber} areas={areas} />

      {/* Reusable Components */}
      <style>
        {`
          /* Section Styles */
          .section-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .section-title {
            font-weight: bold;
            font-size: 1.5rem;
            color: #1976d2;
            margin-bottom: 1.2rem;
            text-align: center;
          }

          /* Areas Section */
          .areas-section {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 2px 12px #0001;
            margin: 2.5rem auto;
          }

          .pagination-controls {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1rem;
          }

          .pagination-btn {
            background: #0a3977;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            padding: 0.6rem 1.5rem;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .pagination-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .pagination-btn:hover:not(:disabled) {
            background: #0a2c61;
            transform: translateY(-2px);
          }

          /* Service Info Section */
          .service-info-section {
            background: #fff;
            border-radius: 1.2rem;
            box-shadow: 0 4px 24px #0001;
            margin: 2.5rem auto;
            border: 1.5px solid #ffe066;
            font-family: 'Cairo, Tajawal, Arial, sans-serif';
          }

          .service-badge {
            background: #ffb100;
            color: #fff;
            display: inline-block;
            font-weight: bold;
            font-size: 1.1rem;
            border-radius: 0.5rem 0.5rem 0 0;
            padding: 0.4rem 1.3rem;
            margin-bottom: 1.1rem;
            letter-spacing: 0.5px;
          }

          .service-title {
            font-weight: bold;
            font-size: 2rem;
            color: #ffb100;
            margin-bottom: 1.2rem;
          }

          .service-description {
            color: #222;
            font-size: 1.15rem;
            line-height: 2;
            margin-bottom: 1.2rem;
          }

          .highlight {
            color: #ff9100;
            font-weight: bold;
          }

          .contact-highlight {
            font-weight: bold;
            color: #1976d2;
            font-size: 1.2rem;
            margin-bottom: 1.1rem;
          }

          .phone-number {
            color: #ff9100;
            font-weight: bold;
            font-size: 1.3rem;
            direction: ltr;
            font-family: monospace;
          }

          .service-details {
            color: #333;
            font-size: 1.08rem;
            line-height: 2;
          }

          /* Features Section */
          .features-section {
            display: flex;
            flex-wrap: wrap;
            background: var(--color-bg);
            color: var(--color-text);
            padding: 0;
            margin: 0 0 2rem 0;
            min-height: 350px;
          }

          .features-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          .features-cta {
            background: var(--color-highlight);
            color: var(--color-bg);
            flex: 1 1 320px;
            padding: 2.5rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }

          .cta-title {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .cta-heading {
            font-weight: bold;
            font-size: 2rem;
            line-height: 1.3;
            margin-bottom: 1.5rem;
          }

          .cta-description {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
          }

          .features-grid {
            flex: 2 1 500px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: stretch;
            padding: 2.5rem 1rem;
            gap: 2rem;
          }

          /* Counter Section */
          .counter-section {
            background: #ffed3b;
            width: 100%;
            padding: 2.5rem 0 1.5rem 0;
            display: flex;
            justify-content: center;
            align-items: stretch;
            gap: 0;
            border: none;
            border-bottom: 1px solid #f7e600;
            margin: 0;
            direction: rtl;
            flex-wrap: wrap;
          }

          /* Gallery Section */
          .gallery-section {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 2px 12px #0001;
            margin: 2.5rem auto;
          }

          .gallery-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            justify-content: center;
            align-items: center;
          }

          .gallery-image {
            width: 180px;
            height: 120px;
            object-fit: cover;
            border-radius: 0.7rem;
            box-shadow: 0 2px 8px #0001;
            background: #f7f7fa;
          }

          /* Partners Section */
          .partners-section {
            background: #ffc107;
            box-shadow: 0 2px 12px #0001;
            text-align: center;
            margin: 3rem auto;
          }

          .partner-slide {
            padding: 0 10px;
          }

          .partner-logo {
            width: 100%;
            max-width: 120px;
            height: 80px;
            object-fit: contain;
            margin: 0 auto;
            filter: drop-shadow(0 2px 8px #0002);
            background: white;
            border-radius: 0.5rem;
            padding: 0.5rem;
          }

          /* Extra Services Section */
          .extra-services-section {
            margin: 2rem auto;
          }

          .services-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 2rem;
            justify-content: center;
          }

          /* Testimonials Section */
          .testimonials-section {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 2px 12px #0001;
            margin: 2.5rem auto;
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          /* Contact Section */
          .contact-section {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 2px 12px #0001;
            margin: 2.5rem auto;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.1rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .section-container {
              padding: 1rem 0.5rem;
            }

            .service-title {
              font-size: 1.5rem;
            }

            .features-container {
              flex-direction: column;
            }

            .features-cta {
              flex: none;
              order: 2;
            }

            .features-grid {
              flex: none;
              order: 1;
            }

            .counter-section {
              flex-direction: column;
              align-items: stretch;
              max-width: 90%;
              margin: auto;
            }

            .counter-section .counter-item {
              border-left: none;
              border-bottom: 1px solid #f7e600;
              padding: 1.2rem 0;
              margin: 0;
            }

            .counter-section .counter-item:last-child {
              border-bottom: none;
            }

            .gallery-grid {
              gap: 1rem;
            }

            .gallery-image {
              width: 150px;
              height: 100px;
            }

            .services-grid {
              gap: 1rem;
            }

            .testimonials-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Quote Section Styles */
          .quote-section {
            max-width: 800px;
            margin: 3rem auto;
            padding: 0 1rem;
          }

          .quote-container {
            background: #f8f9fa;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            padding: 3rem 2rem;
            position: relative;
            overflow: hidden;
            border: 1px solid #e9ecef;
          }

          .quote-content {
            position: relative;
            z-index: 2;
          }

          .quote-icon {
            position: absolute;
            top: 1rem;
            left: 1rem;
            opacity: 0.15;
            z-index: 1;
          }

          .quote-title {
            font-weight: bold;
            font-size: 2.2rem;
            color: #0077ff;
            margin-bottom: 2rem;
            text-align: right;
            line-height: 1.3;
            position: relative;
            z-index: 3;
          }

          .highlight-name {
            position: relative;
            color: #0077ff;
            display: inline-block;
          }

          .underline {
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            height: 4px;
            background: #ffc107;
            border-radius: 2px;
            z-index: -1;
          }

          .quote-text-box {
            background: linear-gradient(135deg, #0a2c61 0%, #1976d2 100%);
            color: #ffc107;
            padding: 2rem 1.5rem;
            border-radius: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 1.8;
            text-align: right;
            direction: rtl;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            border-right: 4px solid #ffc107;
            position: relative;
            z-index: 3;
          }

          .quote-text-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(10,44,97,0.95) 0%, rgba(25,118,210,0.95) 100%);
            border-radius: 1rem;
            z-index: -1;
          }

          @media (max-width: 768px) {
            .quote-container {
              padding: 2rem 1.5rem;
              margin: 2rem 0.5rem;
            }

            .quote-title {
              font-size: 1.8rem;
              margin-bottom: 1.5rem;
            }

            .quote-text-box {
              font-size: 1.1rem;
              padding: 1.5rem 1rem;
            }

            .quote-icon {
              top: 0.5rem;
              left: 0.5rem;
            }

            .quote-icon svg {
              width: 60px;
              height: 60px;
            }
          }

          @media (max-width: 480px) {
            .quote-title {
              font-size: 1.5rem;
            }

            .quote-text-box {
              font-size: 1rem;
              padding: 1.2rem 0.8rem;
            }
          }

          /* Services Overview Section Styles */
          .services-overview-section {
            background: #f0f7ff;
            border-radius: 1rem;
            box-shadow: 0 2px 12px #0001;
            margin: 2.5rem auto;
            padding: 2.5rem 2rem;
            text-align: center;
          }

          .services-main-title {
            font-weight: bold;
            font-size: 2rem;
            color: #0077ff;
            margin-bottom: 1.2rem;
            line-height: 1.3;
          }

          .services-description {
            color: #222;
            font-size: 1.15rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .services-subtitle {
            font-weight: bold;
            font-size: 1.5rem;
            color: #1976d2;
            margin-bottom: 1.2rem;
            text-align: right;
            direction: rtl;
          }

          .services-list {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            text-align: right;
            direction: rtl;
          }

          .service-item {
            background: #f8f9fa;
            border-radius: 0.8rem;
            padding: 1rem 1.2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border: 1px solid #e9ecef;
            display: flex;
            align-items: center;
            font-size: 1.1rem;
            color: #222;
            line-height: 1.7;
            transition: all 0.3s ease;
            margin-bottom: 0.5rem;
          }

          .service-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            background: #fff;
          }

          .service-bullet {
            font-size: 1.2rem;
            margin-left: 0.8rem;
            color: #0077ff;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .services-overview-section {
              padding: 2rem 1.5rem;
              margin: 2rem 1rem;
            }

            .services-main-title {
              font-size: 1.8rem;
            }

            .services-description {
              font-size: 1.1rem;
            }

            .services-subtitle {
              font-size: 1.3rem;
            }

            .service-item {
              font-size: 1rem;
              padding: 0.8rem 1rem;
            }
          }

          @media (max-width: 480px) {
            .services-main-title {
              font-size: 1.6rem;
            }

            .services-description {
              font-size: 1rem;
            }

            .service-item {
              font-size: 0.95rem;
              padding: 0.7rem 0.8rem;
            }
          }
        `}
      </style>
    </>
  );
};

// Reusable Components

// Enhanced Areas Pagination Component
const AreasPagination = ({
  currentPage,
  totalPages,
  isAnimating,
  onPageChange,
  visibleAreasCount,
  totalAreasCount
}) => {
  const handleKeyDown = (e, pageIndex) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onPageChange(pageIndex);
    }
  };

  // Memoize the page indicators to prevent unnecessary re-renders
  const pageIndicators = useMemo(() => {
    if (totalPages <= 1) return null;

    return Array.from({ length: totalPages }, (_, idx) => (
      <button
        key={idx}
        onClick={() => onPageChange(idx)}
        onKeyDown={(e) => handleKeyDown(e, idx)}
        disabled={isAnimating}
        className={`page-dot ${idx === currentPage ? 'active' : ''}`}
        aria-label={`انتقل إلى الصفحة ${idx + 1}`}
        title={`الصفحة ${idx + 1}`}
        role="tab"
        aria-selected={idx === currentPage}
        tabIndex={0}
      />
    ));
  }, [totalPages, currentPage, isAnimating, onPageChange]);

  return (
    <div className="pagination-container" role="navigation" aria-label="تنقل بين صفحات المناطق">
      <div className="pagination-controls">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0 || isAnimating}
          className="pagination-btn"
          aria-label="الصفحة السابقة"
          title="الصفحة السابقة"
          aria-describedby="pagination-info"
        >
          <ChevronRight size={18} />
          السابق
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1 || isAnimating}
          className="pagination-btn"
          aria-label="الصفحة التالية"
          title="الصفحة التالية"
          aria-describedby="pagination-info"
        >
          التالي
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Page Indicators */}
      {pageIndicators && (
        <div className="page-indicators" role="tablist" aria-label="صفحات المناطق">
          {pageIndicators}
        </div>
      )}

      {/* Page Info */}
      <div className="page-info" id="pagination-info" role="status" aria-live="polite">
        الصفحة {currentPage + 1} من {totalPages} • {visibleAreasCount} منطقة معروضة من {totalAreasCount}
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="keyboard-hints" style={{
        fontSize: '0.8rem',
        color: '#888',
        textAlign: 'center',
        marginTop: '0.5rem',
        direction: 'rtl'
      }}>
        استخدم مفاتيح الأسهم للتنقل • Home للصفحة الأولى • End للصفحة الأخيرة
      </div>
    </div>
  );
};

// Enhanced Areas Grid Component
const AreasGrid = ({ visibleAreas, areaPage, isAnimating, winchImg }) => {
  if (isAnimating) {
    return (
      <div className="areas-loading">
        <span>جاري تحميل المناطق...</span>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className={`areas-fade ${isAnimating ? 'out' : 'in'} areas-section-grid`}>
      {/* Left: 2x2 grid of 4 small cards */}
      <div className="areas-small-cards">
        {visibleAreas.slice(0, 4).map((area, idx) => (
          <AreaCard
            key={`small-${areaPage}-${idx}`}
            area={area}
            isSmall={true}
            winchImg={winchImg}
          />
        ))}
      </div>
      {/* Right: 1 large card */}
      <div className="areas-big-card">
        {visibleAreas[4] && (
          <AreaCard
            key={`large-${areaPage}-4`}
            area={visibleAreas[4]}
            isSmall={false}
            winchImg={winchImg}
          />
        )}
      </div>
    </div>
  );
};

const AreaCard = ({ area, isSmall, winchImg }) => {
  // Use React state to track window size instead of window.innerWidth
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Link
      to={`/areas/${encodeURIComponent(area)}`}
      style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
    >
      <div
        className={`area-card-hover big-area-card ${isSmall ? 'area-card-small' : 'area-card-large'}`}
        style={{
          background: 'linear-gradient(135deg, #fff 60%, #e3f0ff 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 32px #00336633, 0 2px 16px #0001',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100%',
          minHeight: isSmall ? '220px' : '260px',
          border: '2.5px solid #ffe066',
          transition: 'transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)',
        }}
      >
        <div className="area-card-image-container" style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: isSmall ? '110px' : '220px',
          overflow: 'hidden'
        }}>
          <img
            src={winchImg}
            alt="ونش انقاذ"
            className="area-card-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.82) saturate(1.1)'
            }}
          />
          <div className="area-card-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, #0a223ad0 60%, #1976d2cc 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}></div>

          {!isSmall && !isMobile && (
            <div className="area-card-badge" style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem',
              zIndex: 3,
              background: '#ffe066',
              color: '#0a2c61',
              borderRadius: '1.2rem',
              padding: '0.4rem 1.2rem',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px #0002',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              <span style={{ fontSize: '1.3rem', marginLeft: '0.3rem' }}>⚡</span>
              خدمة مميزة
            </div>
          )}

          <div className={`area-card-content ${isSmall ? 'area-card-content-small' : 'area-card-content-large'}`} style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 3,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}>
            <div className={`area-card-title ${isSmall ? 'area-card-title-small' : 'area-card-title-large'}`} style={{
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              textShadow: '0 2px 8px #0008',
              color: '#ffe066',
              letterSpacing: '1px',
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #ffe066 60%, #fffbe6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',

            }}>ونش انقاذ {area}</div>

            {!isSmall && (
              <div className="area-card-description" style={{
                marginBottom: '1.2rem',
                textShadow: '0 2px 8px #0008',
                color: '#fff',
                fontWeight: 500,
              }}>
                نقوم بتوفير الوقت عليك في البحث عن ونش إنقاذ سيارات في <span style={{ color: '#ffe066', fontWeight: 'bold' }}>{area.replace('ونش انقاذ ', '')}</span> نحن الشركة رقم 1 في مصر ولدينا أرخص الأسعار.
              </div>
            )}

            {!isSmall && (
              <span className="area-card-service-badge" style={{
                background: '#ffe066',
                color: '#0a2c61',
                borderRadius: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px #0002',
                letterSpacing: '0.5px'
              }}>خدمة على مدار الساعة</span>
            )}

            <button className="area-card-button" style={{
              background: 'linear-gradient(90deg, #ffe066 60%, #ffb100 100%)',
              color: '#0a2c61',
              border: 'none',
              borderRadius: '0.7rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 8px #0002',
              transition: 'background 0.18s',
            }}>اتصل الآن</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div style={{ flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center' }}>
    <div style={{ marginBottom: '1rem' }}>{icon}</div>
    <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{title}</div>
    <div style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>{description}</div>
  </div>
);

const CounterItem = ({ target, prefix = "", suffix = "", label }) => (
  <div className="counter-item" style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem' }}>
    <div style={{ fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem' }}>
      <AnimatedCounter target={target} prefix={prefix} suffix={suffix} />
    </div>
    <div style={{ fontWeight: 'bold', color: '#222', fontSize: '1rem' }}>{label}</div>
  </div>
);

const ServiceCard = ({ service, image }) => (
  <Link
    to={`/service/${service.id}`}
    style={{ textDecoration: 'none', flex: '1 1 220px', maxWidth: '350px', minWidth: '220px', display: 'flex' }}
  >
    <div
      style={{
        background: 'var(--color-muted)',
        color: 'var(--color-text)',
        borderRadius: '1rem',
        padding: '2rem 1rem',
        boxShadow: '0 0 40px #00384466 ',
        textAlign: 'center',
        transition: 'transform 0.2s',
        fontWeight: 500,
        minHeight: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="service-card-hover"
    >
      {service.icon}
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem' }}>{service.title}</div>
      <div style={{ fontSize: '1rem' }}>{service.desc}</div>
      <img
        src={image}
        alt={service.title}
        style={{
          width: '100%',
          borderRadius: '0.7rem',
          margin: '1rem auto 1rem auto',
          display: 'block',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}
      />
    </div>
  </Link>
);

const TestimonialCard = ({ text, author }) => (
  <div className="testimonial">
    <div>{text}</div>
    <div className="testimonial-author">{author}</div>
  </div>
);

const ServiceFeaturesList = () => (
  <ul style={{ color: '#222', fontSize: '1.08rem', marginBottom: '1.2rem', paddingRight: '1.5rem', lineHeight: 2 }}>
    <li><span className="highlight">سحب و انقاذ السيارات:</span> نوفر جميع خدمات السحب والرفع لأي نوع سيارة وفي أي مكان.</li>
    <li><span className="highlight">تغيير الاطارات:</span> نصل إليك أينما كنت ونساعدك في تغيير أو إصلاح الإطار المعطل.</li>
    <li><span className="highlight">نقل الوقود:</span> إذا نفد وقود سيارتك، اتصل بنا وسنصل إليك فوراً لتزويدك بالوقود.</li>
    <li><span className="highlight">شحن بطاريات السيارة:</span> خدمة شحن البطارية متوفرة في أي وقت.</li>
  </ul>
);

const FooterContent = ({ phoneNumber, areas }) => (
  <>
    {/* Rating Bar */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
      fontSize: '1.35rem',
      fontWeight: 'bold',
      margin: '1.5rem 0 0.5rem 0',
      direction: 'rtl',
    }}>
      <span style={{ color: '#FFA500', fontSize: '2rem', marginLeft: '0.3rem' }}>
        <span style={{ marginLeft: '0.1rem' }}>&#9733;</span>
        <span style={{ marginLeft: '0.1rem' }}>&#9733;</span>
        <span style={{ marginLeft: '0.1rem' }}>&#9733;</span>
        <span style={{ marginLeft: '0.1rem' }}>&#9733;</span>
        <span style={{ marginLeft: '0.1rem' }}>&#9733;</span>
      </span>
      <span style={{ color: '#222', fontWeight: 'bold', fontSize: '1.15rem', marginTop: '8px' }}>
        5/5 - (1986 صوت)
      </span>
    </div>

    {/* Areas Simple List Section */}
    <section style={{
      maxWidth: '1100px',
      margin: '2.5rem auto',
      padding: '1.5rem 1rem',
      borderRadius: '1rem',
      boxShadow: '0 2px 12px #0001',
      background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '2rem', color: 'var(--color-highlight)', marginBottom: '1.2rem', textAlign: 'center' }}>مناطق التغطية</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '0.7rem 1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'rtl',
      }}>
        {areas.map((area, idx) => (
          <Link
            key={idx}
            to={`/areas/${encodeURIComponent(area)}`}
            style={{
              color: '#ffe066',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.2rem',
              padding: '0.5rem 0.2rem',
              borderRadius: '0.4rem',
              transition: 'background 0.15s',
              textAlign: 'center',
              display: 'block',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#f7f7fa'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            ونش انقاذ {area}
          </Link>
        ))}
      </div>
    </section>

    {/* Back Footer Section */}
    <section
      style={{
        position: 'relative',
        minHeight: '390px',
        width: '100%',
        margin: '0',
        padding: '0',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
      }}
      className='back-footer'
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.81)',
          zIndex: 2,
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '3rem 2rem',
          color: '#fff',
          gap: '2rem',
        }}
      >
        {/* Contact Info - Left */}
        <div style={{ flex: '1 1 340px', textAlign: 'right', background: 'rgba(0,0,0,0.55)', borderRadius: '1rem', padding: '2rem 2rem', boxShadow: '0 2px 16px #00000033', marginRight: 'auto' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem' }}>اتصل بنا الان</div>
          <div style={{ fontSize: '1.05rem', margin: '1.2rem 0 1.5rem 0', color: '#fff' }}>
            ونش انقاذ محمد بحر هو اسرع و ارخص ونش انقاذ سيارات اتصل على رقم ونش الانقاذ خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ background: '#ffe600', borderRadius: '50%', padding: '0.5rem' }}><Phone color='#000' size={20} /></span>
              <span style={{ direction: 'ltr', fontFamily: 'monospace', fontSize: '20px' }}>{phoneNumber}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ background: '#ffe600', fontSize: '20px', color: '#000', borderRadius: '50%', padding: '0.5rem' }}><FontAwesomeIcon color='#000' size='1xl' icon={faWhatsapp} /></span>
              <span style={{ direction: 'ltr', fontFamily: 'monospace', fontSize: '20px' }}>{phoneNumber}</span>
            </div>
          </div>
          {/* Keywords Section */}
          <section style={{
            color: '#ffe600',
            textAlign: 'center',
            padding: '2rem 1rem 1.5rem 1rem',
            fontWeight: 'bold',
            fontSize: '1.35rem',
            lineHeight: '2.2',
            letterSpacing: '0.5px',
            direction: 'rtl',
            boxShadow: '0 2px 12px #00336622',
            borderRadius: '0.7rem',
            margin: '1.5rem 0',
            overflowX: 'auto',
          }}>
            <div style={{ marginBottom: '1.2rem', fontWeight: 500, fontSize: '1.1rem', color: '#ffe600' }}>
              اختيار ونش إنقاذ سيارات موثوق به يضمن لك الأمان والسرعة في الوصول والمساعدة في أصعب الظروف. نحن نعمل على مدار الساعة لتقديم أفضل خدمة إنقاذ سيارات في مصر بأعلى جودة وأقل سعر.
            </div>
            <div>
              ونش انقاذ – ونش انقاذ سيارات – ونش سيارة – اسرع ونش انقاذ – اقرب ونش انقاذ – انقاذ سيارات – ارخص ونش انقاذ – انقاذ السيارات – ونش عربيات – تليفون ونش انقاذ – رقم ونش انقاذ – ونش انقاذ بالقرب مني
            </div>
          </section>
        </div>
        {/* Quick Links - Right */}
        <div style={{ flex: '1 1 260px', minWidth: '220px', textAlign: 'right' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem' }}>روابط مفيدة</div>
          <div style={{ display: 'flex', gap: '0.5rem 2.5rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
              {areas.slice(0, Math.ceil(areas.length / 2)).map((area, idx) => (
                <Link key={idx} to={`/areas/${encodeURIComponent(area)}`} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><Link2 size={15} />ونش انقاذ {area}</Link>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
              {areas.slice(Math.ceil(areas.length / 2)).map((area, idx) => (
                <Link key={idx} to={`/areas/${encodeURIComponent(area)}`} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><Link2 size={15} />ونش انقاذ {area}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Custom Footer Section */}
    <div style={{ background: '#232328', color: '#fff', padding: '3rem 0 2rem 0', }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '4rem',
        maxWidth: '1100px',
        margin: '0 auto',
        alignItems: 'flex-start',
      }}>
        {/* Services */}
        <div style={{ minWidth: 220, flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '2px solid #fff2', paddingBottom: 8, textAlign: 'right' }}>خدماتنا</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'right' }}>
            {['ونش انقاذ', 'ونش انقاذ سيارات', 'رقم ونش انقاذ', 'ارخص ونش انقاذ', 'اقرب ونش انقاذ', 'اسرع ونش انقاذ', 'ونش سيارات'].map((service, idx, arr) => (
              <li key={idx} style={{ marginBottom: 12, fontSize: '1.1rem', borderBottom: idx !== arr.length - 1 ? '1px solid #fff1' : 'none', paddingBottom: 6 }}>{service}</li>
            ))}
          </ul>
        </div>
        {/* Keywords */}
        <div style={{ minWidth: 320, flex: 2 }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '2px solid #fff2', paddingBottom: 8, textAlign: 'center' }}>كلمات بحث</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {['ارخص ونش انقاذ سيارات', 'اسرع ونش انقاذ سيارات', 'اقرب ونش انقاذ سيارات', 'رقم ونش انقاذ سيارات', 'ونش انقاذ', 'ونش', 'ونش انقاذ سيارات', 'ونش انقاذ سيارات في الجيزة', 'ونش انقاذ سيارات في القاهرة', 'ونش انقاذ سيارات في القطامية', 'ونش حر سيارات', 'ونش ريكفري', 'ونش عربيات', 'ونش نقل سيارات', 'تليفون ونش انقاذ سيارات'].map((kw, idx) => (
              <span key={idx} style={{
                background: '#2d2d33',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '8px',
                padding: '0.4rem 1.1rem',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                display: 'inline-block',
                boxShadow: '0 2px 8px #0002',
                cursor: 'default',
              }}>{kw}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home; 