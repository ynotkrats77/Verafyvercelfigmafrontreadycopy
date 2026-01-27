# 💰 Growth Systems Documentation

**Verafy AI - Three Growth-Driving Systems**

---

## 📊 Overview

Verafy AI features **three separate growth systems** designed to drive user acquisition, engagement, and retention:

1. **💰 Earn Verafy Cash** - Content creation rewards
2. **🎁 Referral Program** - Invite friends, earn $10 each
3. **🎓 Academy** - Investment education courses

Each system is tracked separately in the **Subscriptions** dashboard.

---

## 💰 SYSTEM 1: Earn Verafy Cash

### **Overview**

Create content about Verafy, earn credits, convert to cash.

**Location:** Learning → Earn Verafy Cash  
**File:** `/pages/learning/EarnCreditsPage.tsx`

### **How It Works**

```
Create Content
    ↓
Submit for Review
    ↓
Get Approved
    ↓
Earn Credits
    ↓
Convert to Cash (20 credits = $1)
```

### **Conversion Rate**

- **20 credits = $1 Verafy Cash**
- Credits accumulate in your account
- Cash can be used for subscription discounts

---

### **10 Earning Opportunities**

#### **1. YouTube Video Review** 🎥
- **Credits:** 100
- **Platform:** YouTube
- **Requirements:**
  - 5-10 minute product review
  - Show features and use cases
  - Link in description
  - Tag @verafy_official
- **Bonuses:**
  - +50 credits @ 5,000 views
  - +100 credits @ 10,000 views
  - +200 credits @ 50,000 views

#### **2. YouTube Shorts** 📹
- **Credits:** 30
- **Platform:** YouTube Shorts
- **Requirements:**
  - 15-60 second short video
  - Show key feature
  - Tag @verafy_official
- **Bonuses:**
  - +50 credits @ 5,000 views
  - +100 credits @ 10,000 views

#### **3. Instagram Reel** 📷
- **Credits:** 30
- **Platform:** Instagram
- **Requirements:**
  - 15-60 second reel
  - Show Verafy in action
  - Tag @verafy_official
- **Bonuses:**
  - +50 credits @ 5,000 views
  - +100 credits @ 10,000 views

#### **4. TikTok Video** 🎵
- **Credits:** 30
- **Platform:** TikTok
- **Requirements:**
  - 15-60 second video
  - Use trending sounds
  - Tag @verafy_to
- **Bonuses:**
  - +50 credits @ 5,000 views
  - +100 credits @ 10,000 views

#### **5. Twitter/X Thread** 🐦
- **Credits:** 15
- **Platform:** Twitter/X
- **Requirements:**
  - 5+ tweet thread
  - Share your experience
  - Tag @verafy
  - Use #VerafyAI

#### **6. LinkedIn Post** 💼
- **Credits:** 10
- **Platform:** LinkedIn
- **Requirements:**
  - Professional post (200+ words)
  - Share use case
  - Tag Verafy company page

#### **7. Feature Request** ⭐
- **Credits:** 50
- **Platform:** Community Forum
- **Requirements:**
  - Detailed feature suggestion
  - Use case explanation
  - Screenshots/mockups (optional)
- **Bonuses:**
  - +100 credits if implemented

#### **8. Bug Report** 🐛
- **Credits:** 25
- **Platform:** Community Forum
- **Requirements:**
  - Detailed bug description
  - Steps to reproduce
  - Screenshots/video
- **Bonuses:**
  - +75 credits for critical bugs

#### **9. Community Helper** 💬
- **Credits:** 5 per answer
- **Platform:** Community Forum
- **Requirements:**
  - Answer user questions
  - Provide helpful solutions
  - Be respectful and accurate
- **Bonuses:**
  - +10 credits for Best Answer

#### **10. Community Guide** 📖
- **Credits:** 150
- **Platform:** Community Forum
- **Requirements:**
  - Write comprehensive guide (1000+ words)
  - Include screenshots/examples
  - Cover specific feature/topic
- **Bonuses:**
  - +50 credits @ 100 views
  - +100 credits @ 500 views

---

### **Platform Color Coding**

```typescript
const PLATFORM_COLORS = {
  youtube: '#FF0000',      // Red
  instagram: '#E1306C',    // Pink
  tiktok: '#00F2EA',       // Cyan
  twitter: '#1DA1F2',      // Blue
  linkedin: '#0077B5',     // Blue
  community: '#22D3EE',    // Cyan (Verafy)
};
```

---

### **Submission Process**

1. **Create Content** according to requirements
2. **Submit Link** via "Submit for Review" button
3. **Team Reviews** within 3-5 business days
4. **Get Notified** via email
5. **Credits Added** to your account

---

### **Rules & Guidelines**

✅ **Allowed:**
- Honest reviews (positive or constructive)
- Personal experiences
- Creative content
- Multiple submissions

❌ **Not Allowed:**
- Fake accounts
- Spam content
- Misleading information
- Copyright violations
- Offensive content

---

### **Stats Tracking**

```typescript
interface EarnCreditsStats {
  creditsEarned: number;      // Total credits earned
  verafyCash: number;         // Cash value ($)
  pendingReview: number;      // Submissions under review
  approved: number;           // Approved submissions
}
```

**Example:**
- Credits Earned: 500
- Verafy Cash: $25 (500 ÷ 20)
- Pending Review: 3
- Approved: 12

---

## 🎁 SYSTEM 2: Referral Program

### **Overview**

Invite friends, earn $10 when they upgrade to a paid plan.

**Location:** Referrals → Referral Program  
**File:** `/pages/referral/ReferralProgramPage.tsx`

### **How It Works - 4 Steps**

#### **Step 1: Sign Declaration** ✍️
- Confirm you personally know the person
- Anti-gaming protection
- One-time agreement

#### **Step 2: Friend Receives Email** 📧
- Personalized invitation email
- Your name included
- Special referral link

#### **Step 3: 14-Day Cool-Off** 🕐
- Friend tries Verafy free for 14 days
- Full access to features
- No credit card required initially

#### **Step 4: Earn $10 Reward** 💰
- Friend upgrades to paid plan
- You both earn $10
- Credited to your account

---

### **Earning Potential**

| Referrals | Your Earnings | Friend Earnings | Total Value |
|-----------|---------------|-----------------|-------------|
| 1 friend  | $10          | $10             | $20         |
| 5 friends | $50          | $50             | $100        |
| 10 friends| $100         | $100            | $200        |
| 50 friends| $500         | $500            | $1,000      |

**Unlimited earning potential!**

---

### **Features**

#### **Referral Link Sharing**
```
https://verafy.ai/join/YOUR_CODE
```

- Copy link button
- Share to social media
- QR code (coming soon)
- Email invitations

#### **Top Referrers Leaderboard** 🏆

```
🥇 1st Place - Gold Medal
🥈 2nd Place - Silver Medal  
🥉 3rd Place - Bronze Medal
   4th-10th - Standard Display
```

**Example Leaderboard:**
1. Sarah M. - 23 referrals - $230
2. Michael K. - 19 referrals - $190
3. Emma L. - 15 referrals - $150
4. You (Amit V.) - 7 referrals - $70
5. David P. - 12 referrals - $120

#### **My Referrals Tracking**

Track each referral with:
- **Name** - Friend's name
- **Email** - Friend's email
- **Status** - Active Paid / Pending / Trial
- **Earned** - Amount earned
- **Date** - Sign-up date

**Example:**
```
John Smith
john.s@email.com
Status: Active Paid
Earned: $10
Date: Jan 5, 2026
```

---

### **Stats Tracking**

```typescript
interface ReferralStats {
  totalEarned: number;        // Total $ earned
  pendingRewards: number;     // $ pending payment
  totalReferrals: number;     // Total friends invited
  activeReferrals: number;    // Friends on paid plans
}
```

**Example:**
- Total Earned: $40
- Pending Rewards: $20
- Total Referrals: 7
- Active Referrals: 4

---

### **Important Rules**

✅ **Qualifies:**
- Personal friends/family
- Professional network
- Genuine recommendations

❌ **Does NOT Qualify:**
- Freemium-only sign-ups
- Fake accounts
- Self-referrals
- Mass email spam

**Anti-Gaming Rules:**
- Declaration required
- Email verification
- Payment verification
- Manual review for high-volume referrers

---

### **Payment**

**When You Get Paid:**
- Friend completes 14-day trial
- Friend upgrades to paid plan
- First payment processes
- Your $10 credited within 3-5 days

**Payment Methods:**
- Account credit (default)
- PayPal (coming soon)
- Bank transfer (coming soon)

---

## 🎓 SYSTEM 3: Academy

### **Overview**

Learn investment fundamentals, earn badges, build expertise.

**Location:** Learning → Academy  
**File:** `/pages/learning/AcademyPage.tsx`

### **How It Works**

```
Browse Courses
    ↓
Enroll in Course
    ↓
Complete Lessons
    ↓
Earn Badges
    ↓
Track Progress
    ↓
Maintain Streak
```

---

### **12 Investment Courses**

#### **Beginner Level** (3 courses)

**1. Investing Fundamentals (AU)** 🇦🇺
- Duration: 45 minutes
- Lessons: 3
- Topics:
  - Australian stock market basics
  - ASX 200 understanding
  - Investment types (stocks, ETFs, funds)

**2. Australian Tax for Investors** 💰
- Duration: 50 minutes
- Lessons: 3
- Topics:
  - Capital gains tax (CGT)
  - Dividend imputation
  - Tax-loss harvesting
- **Status:** LOCKED (Requires Standard plan)

**3. Getting Started Checklist** ✅
- Duration: 30 minutes
- Lessons: 2
- Topics:
  - Setting investment goals
  - Risk assessment
  - First investment steps

#### **Intermediate Level** (4 courses)

**4. Portfolio Diversification** 📊
- Duration: 40 minutes
- Lessons: 3
- Topics:
  - Asset allocation
  - Sector diversification
  - Geographic diversification

**5. Smart Risk Management** 🛡️
- Duration: 55 minutes
- Lessons: 3
- **Status:** LOCKED (Requires Standard plan)

**6. Technical Analysis Fundamentals** 📈
- Duration: 60 minutes
- Lessons: 3
- Topics:
  - Chart patterns
  - Indicators (RSI, MACD)
  - Support and resistance

**7. Investor Psychology** 🧠
- Duration: 45 minutes
- Lessons: 3
- Topics:
  - Behavioral biases
  - Emotional discipline
  - Decision-making frameworks

#### **Advanced Level** (5 courses)

**8. Superannuation Mastery** 💼
- Duration: 60 minutes
- Lessons: 3
- Topics:
  - Super strategies
  - Contribution caps
  - Retirement planning

**9. Options Trading Mastery** ⚡
- Duration: 90 minutes
- Lessons: 5
- Topics:
  - Calls and puts
  - Strategies (covered calls, spreads)
  - Risk management

**10. Advanced Portfolio Theory** 🎯
- Duration: 75 minutes
- Lessons: 4
- Topics:
  - Modern portfolio theory
  - Sharpe ratio optimization
  - Factor investing

**11. SMSF: Self-Managed Super Funds** 🏦
- Duration: 70 minutes
- Lessons: 4
- **Status:** LOCKED (Requires Pro plan)

**12. Investment Traps to Avoid** ⚠️
- Duration: 40 minutes
- Lessons: 2
- Topics:
  - Common mistakes
  - Scams and fraud
  - Red flags

---

### **Progress Tracking**

```typescript
interface AcademyProgress {
  coursesCompleted: number;    // e.g., 8/24
  hoursLearned: number;        // Total hours
  currentStreak: number;       // Days in a row
  badgesEarned: number;        // Achievement badges
}
```

**Example:**
- Courses Completed: 8/24
- Hours Learned: 42h
- Current Streak: 14 days
- Badges Earned: 12

---

### **Badges & Achievements** 🏅

**Learning Milestones:**
- 🎓 First Course Complete
- 📚 5 Courses Complete
- 🌟 10 Courses Complete
- 🏆 All Courses Complete

**Streak Achievements:**
- 🔥 7-Day Streak
- 💪 30-Day Streak
- 🚀 100-Day Streak

**Skill Badges:**
- 📊 Portfolio Master
- 💰 Tax Expert
- 📈 Technical Analyst
- 🧠 Psychology Pro

---

## 📊 Unified Tracking (Subscriptions)

### **Location:** Profile → Subscriptions

All three systems tracked in one dashboard:

```typescript
interface GrowthSystemsStats {
  verafyCash: {
    earned: number;           // Credits earned
    pending: number;          // Under review
    approved: number;         // Approved submissions
  };
  referrals: {
    total: number;            // Total referrals
    active: number;           // Active paid users
    pending: number;          // Pending conversion
    earned: string;           // Total $ earned
  };
  academy: {
    coursesCompleted: number; // Courses done
    hoursLearned: number;     // Hours studied
    streak: number;           // Current streak
  };
}
```

**Visual Display:**
- 3 summary cards
- Color-coded by system
- Quick stats overview
- Links to each system

---

## 📈 Growth Projections

### **Month 1 Targets**
- 1,000 content submissions
- 500 referral sign-ups
- 2,000 course enrollments

### **Month 3 Targets**
- 5,000 content submissions
- 2,500 referral sign-ups
- 10,000 course enrollments

### **Month 6 Targets**
- 15,000 content submissions
- 7,500 referral sign-ups
- 30,000 course enrollments

---

## 🎯 Best Practices

### **Earn Verafy Cash**
- Create high-quality content
- Follow platform guidelines
- Be authentic and honest
- Engage with your audience

### **Referral Program**
- Only invite people you know
- Explain Verafy benefits clearly
- Share personal experiences
- Follow up with invitees

### **Academy**
- Complete courses in order
- Take notes while learning
- Apply concepts to your portfolio
- Maintain daily streak

---

## 📞 Support

**Questions about Growth Systems?**
- Email: growth@verafy.ai
- Community Forum: Available in dashboard
- FAQ: See below

---

## ❓ Frequently Asked Questions

**Q: How long does content review take?**  
A: 3-5 business days

**Q: When do I get my referral reward?**  
A: 3-5 days after friend's first payment

**Q: Can I lose my Academy streak?**  
A: Yes, if you don't complete a lesson for 24+ hours

**Q: What happens to unused Verafy Cash?**  
A: Never expires, stays in your account

**Q: Is there a referral limit?**  
A: No limit! Refer as many friends as you want

---

**Growth Systems Version:** 1.0  
**Last Updated:** January 12, 2026
