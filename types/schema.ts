// User-related types
export interface User {
  userId: number
  userName: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  role: "student" | "teacher" | "admin"
  avatarUrl?: string
  createdAt: string
}

export interface UserPermission {
  permissionId: number
  userId: number
  role: string
  text: string
}

// Course-related types
export interface Course {
  courseId: number
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  createdAt: string
}

export interface Lesson {
  lessonId: number
  courseId: number
  title: string
  content: string
  createdAt: string
}

export interface Question {
  questionId: number
  lessonId: number
  question: string
  correctAnswer: string
  difficulty: "easy" | "medium" | "hard"
  createdAt: string
}

export interface Answer {
  answerId: number
  questionId: number
  userId: number
  userAnswer: string
  isCorrect: boolean
  createdAt: string
}

// Progress-related types
export interface Progress {
  progressId: number
  userId: number
  lessonId: number
  status: "not started" | "in progress" | "completed"
  createdAt: string
}

// Reward-related types
export interface Reward {
  rewardId: number
  name: string
  cost: number
  description?: string
}

export interface UserReward {
  userRewardId: number
  userId: number
  rewardId: number
  redeemedAt: string
}

// School-related types
export interface School {
  schoolId: number
  schoolName: string
  schoolAddress?: string
  schoolPhone?: string
  schoolEmail?: string
  schoolWebsite?: string
  schoolLogo?: string
  schoolType: "Public" | "Private"
  schoolCreatedAt: string
}

export interface Student {
  studentId: number
  userId: number
  schoolId: number
}

export interface Teacher {
  teacherId: number
  userId: number
  schoolId: number
}

export interface SchoolAdmin {
  schoolAdminId: number
  userId: number
  schoolId: number
}

export interface Admin {
  adminId: number
  userId: number
}

// Log-related types
export interface Log {
  id: number
  text: string
  createdAt: string
}

export interface ChatLog {
  chatId: number
  userId: number
  filename: string
  createdAt: string
}

