export type PackageTier = {
  name: string;
  description: string;
  price: string;
  duration: string;
  sessions: string;
  bestFor: string;
  includes: string[];
  type: string;
  status: "Active" | "Draft";
  bookings: number;
  featured?: boolean;
};

export const packages: PackageTier[] = [
  {
    name: "Teen Package",
    description: "Designed for young/new drivers who are beginning their driving journey.",
    price: "GYD $45,000",
    duration: "Full beginner package",
    sessions: "1 or 2 hour sessions",
    bestFor: "New teen learners",
    includes: ["Driving basics", "Road confidence", "Instructor guidance"],
    type: "Beginner",
    status: "Active",
    bookings: 18
  },
  {
    name: "Refreshers Package",
    description: "For drivers who already have experience but need confidence, practice, or updated guidance.",
    price: "GYD $28,000",
    duration: "Flexible practical sessions",
    sessions: "Focused refresher blocks",
    bestFor: "Returning drivers",
    includes: ["Confidence practice", "Parking review", "Road rule refresh"],
    type: "Confidence",
    status: "Active",
    bookings: 11
  },
  {
    name: "Bronze Package",
    description: "Entry-level practical driving package with guided road practice.",
    price: "GYD $35,000",
    duration: "Core sessions",
    sessions: "Practical foundation",
    bestFor: "Budget-conscious starters",
    includes: ["Vehicle control", "Instructor feedback", "Basic manoeuvres"],
    type: "Practical",
    status: "Active",
    bookings: 24
  },
  {
    name: "Silver Package",
    description: "Balanced package for steady practical driving development.",
    price: "GYD $55,000",
    duration: "Extended sessions",
    sessions: "Balanced practice plan",
    bestFor: "Most students",
    includes: ["Practical lessons", "Booking support", "Theory guidance"],
    type: "Popular",
    status: "Active",
    bookings: 31,
    featured: true
  },
  {
    name: "Gold Package",
    description: "More complete training package with additional practice time.",
    price: "GYD $75,000",
    duration: "Complete training path",
    sessions: "More road time",
    bestFor: "Exam preparation",
    includes: ["Extra practice", "Readiness checks", "Progress support"],
    type: "Advanced",
    status: "Active",
    bookings: 16
  },
  {
    name: "VIP Package",
    description: "Premium package with priority support and a more personalized learning experience.",
    price: "GYD $110,000",
    duration: "Priority training",
    sessions: "Priority scheduling",
    bestFor: "Personalized support",
    includes: ["Priority support", "Custom schedule", "Premium follow-up"],
    type: "Premium",
    status: "Draft",
    bookings: 7
  }
];

export const student = {
  name: "Alicia Persaud",
  id: "UDS-592-1048",
  email: "alicia@example.com",
  phone: "602-0000",
  packageName: "Silver Package",
  paymentStatus: "Pending Confirmation",
  discountStatus: "Active",
  mockTestStatus: "Available",
  validUntil: "31 Dec 2026",
  verificationId: "UV592-ACT-1048"
};

export const bookings = [
  {
    student: "Alicia Persaud",
    packageName: "Silver Package",
    date: "2026-07-02",
    time: "9:00 AM",
    duration: "2 hours",
    paymentStatus: "Pending Payment",
    status: "Pending"
  },
  {
    student: "Jamal Singh",
    packageName: "Bronze Package",
    date: "2026-07-03",
    time: "1:00 PM",
    duration: "1 hour",
    paymentStatus: "Confirmed",
    status: "Confirmed"
  },
  {
    student: "Nadia Khan",
    packageName: "VIP Package",
    date: "2026-07-04",
    time: "3:00 PM",
    duration: "2 hours",
    paymentStatus: "Confirmed",
    status: "Completed"
  }
];

export const onlineClasses = [
  {
    title: "Theory Exam Prep Live Class",
    description: "Live walkthrough of exam topics, safe road behaviour, and question strategy.",
    date: "Every Tuesday",
    time: "6:00 PM",
    platform: "Google Meet link placeholder",
    type: "Theory",
    status: "Scheduled"
  },
  {
    title: "Vehicle Basics: Parts of the Vehicle",
    description: "Pre-class basics covering controls, mirrors, tyres, lights, and safety checks.",
    date: "Every Thursday",
    time: "6:00 PM",
    platform: "Zoom link placeholder",
    type: "Vehicle Basics",
    status: "Scheduled"
  },
  {
    title: "Changing a Wheel",
    description: "Practical readiness lesson covering roadside safety and wheel-change steps.",
    date: "Monthly",
    time: "5:30 PM",
    platform: "WhatsApp group placeholder",
    type: "Readiness",
    status: "Draft"
  },
  {
    title: "Road Signs and Rules",
    description: "Visual study session for common signs, markings, junctions, and right-of-way.",
    date: "Every Saturday",
    time: "10:00 AM",
    platform: "Google Meet link placeholder",
    type: "Road Rules",
    status: "Scheduled"
  }
];

export const mockTests = [
  {
    title: "Theory Mock Test 01",
    status: "Available",
    attempts: "0 of 1 used",
    questions: [
      {
        prompt: "What should you do before moving off from a parked position?",
        options: ["Signal and check mirrors/blind spots", "Accelerate quickly", "Sound the horn twice", "Turn without checking"]
      },
      {
        prompt: "A yellow road sign usually indicates:",
        options: ["Warning or caution", "Parking only", "No entry", "Fuel station ahead"]
      },
      {
        prompt: "When should a student notify the school to reschedule?",
        options: ["3 to 4 hours before class", "After the class time", "One week after", "Only at night"]
      }
    ]
  }
];

export const discountPartners = [
  {
    name: "Auto Parts Partner",
    discount: "10% off selected accessories",
    location: "Georgetown placeholder",
    contact: "Contact to be added",
    rules: "Valid for active Ultraviolet students with digital card.",
    status: "Active"
  },
  {
    name: "Car Wash Partner",
    discount: "10% off wash packages",
    location: "East Bank placeholder",
    contact: "Contact to be added",
    rules: "Student must show valid discount card before service.",
    status: "Active"
  },
  {
    name: "Tyre Shop Partner",
    discount: "10% off selected tyre services",
    location: "Region 4 placeholder",
    contact: "Contact to be added",
    rules: "Discount applies to listed services only.",
    status: "Active"
  },
  {
    name: "Food/Refreshment Partner",
    discount: "10% off student specials",
    location: "Location to be added",
    contact: "Contact to be added",
    rules: "Discount availability may vary by day.",
    status: "Pending"
  }
];

export const payments = [
  {
    student: "Alicia Persaud",
    packageName: "Silver Package",
    amount: "GYD $55,000",
    method: "MMG",
    proof: "Screenshot pending review",
    status: "Pending"
  },
  {
    student: "Jamal Singh",
    packageName: "Bronze Package",
    amount: "GYD $35,000",
    method: "Cash",
    proof: "Admin receipt",
    status: "Confirmed"
  },
  {
    student: "Nadia Khan",
    packageName: "VIP Package",
    amount: "GYD $110,000",
    method: "MMG",
    proof: "Reference #MMG-2048",
    status: "Confirmed"
  }
];

export const students = [
  {
    name: "Alicia Persaud",
    email: "alicia@example.com",
    phone: "602-0000",
    packageName: "Silver Package",
    paymentStatus: "Pending",
    bookingStatus: "Pending",
    discountStatus: "Active",
    mockTestStatus: "Available"
  },
  {
    name: "Jamal Singh",
    email: "jamal@example.com",
    phone: "602-0001",
    packageName: "Bronze Package",
    paymentStatus: "Confirmed",
    bookingStatus: "Confirmed",
    discountStatus: "Active",
    mockTestStatus: "Completed"
  },
  {
    name: "Nadia Khan",
    email: "nadia@example.com",
    phone: "602-0002",
    packageName: "VIP Package",
    paymentStatus: "Confirmed",
    bookingStatus: "Completed",
    discountStatus: "Active",
    mockTestStatus: "Locked"
  }
];
