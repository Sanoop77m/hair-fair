"use client";

import {
  Apple,
  Play,
  Download,
  BookOpen,
  Users,
  Star,
  Heart,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function IconExample() {
  return (
    <div className="p-8 space-y-8">
      {/* Basic Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Basic Icons</h2>
        <div className="flex gap-4 items-center">
          <Apple className="w-6 h-6 text-gray-600" />
          <Play className="w-6 h-6 text-blue-500" />
          <Download className="w-6 h-6 text-green-500" />
          <BookOpen className="w-6 h-6 text-purple-500" />
          <Users className="w-6 h-6 text-orange-500" />
          <Star className="w-6 h-6 text-yellow-500" />
        </div>
      </div>

      {/* Icons with Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Icons with Text</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-500" />
            <span>Download App</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-500" />
            <span>Contact Us</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>Our Location</span>
          </div>
        </div>
      </div>

      {/* Button with Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons with Icons</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Apple className="w-5 h-5" />
            App Store
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            <Play className="w-5 h-5" />
            Google Play
          </button>
        </div>
      </div>

      {/* Feature Cards with Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <Heart className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="font-semibold">Premium Care</h3>
            <p className="text-gray-600 text-sm">World-class treatments</p>
          </div>
          <div className="p-4 border rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
            <h3 className="font-semibold">Safe & Natural</h3>
            <p className="text-gray-600 text-sm">Proven results</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Clock className="w-8 h-8 text-blue-500 mb-2" />
            <h3 className="font-semibold">Quick Recovery</h3>
            <p className="text-gray-600 text-sm">Fast healing process</p>
          </div>
        </div>
      </div>

      {/* Contact Info with Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-500" />
            <span>info@hairfair.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span>123 Beauty Street, City, State</span>
          </div>
        </div>
      </div>

      {/* Interactive Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Interactive Icons</h2>
        <div className="flex gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Star className="w-6 h-6 text-gray-600 hover:text-yellow-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
